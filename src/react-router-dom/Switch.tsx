import React, { Component } from 'react'
import { Consumer } from './context'
import { IStateLocation } from './state'

import pathToReg from 'path-to-regexp'

export default class Switch extends Component {
  public constructor (props: {}) {
    super(props)
  }
  public render () {
    return (
      <Consumer>
        {(state: IStateLocation) => {
            let pathname = state.location.pathname
            let childrens = (this.props.children as Array<any>)
            for (let i = 0; i < childrens.length; i++) {
                let children = childrens[i]
                let path: string = children.props.path || '' // Redirect 组件可能没有path属性
                let reg = pathToReg(path, [], {end: false})
                // switch 匹配成功
                if (reg.test(pathname)) {
                    return children // 返回匹配组件
                }
            }
            return null
        }}
      </Consumer>
    )
  }
}
