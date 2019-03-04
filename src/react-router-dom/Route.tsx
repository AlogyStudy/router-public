import React, { Component } from 'react'
import { Consumer } from './context'
import { IStateLocation } from './state'

import pathToReg from 'path-to-regexp'

interface IProps {
  path: string
  exact: boolean
  component: any
}

export default class Route extends Component<IProps, {}> {
  constructor (props: IProps) {
    super(props)
  }
  public render () {
    return (
      <Consumer>
        {(state: IStateLocation) => {
          global.console.log(state.localtion, 'state.localtion')
          if (state.localtion) {
            global.console.log(123123)
            // path 是route中传递的
            const { path, component: Components, exact=false } = this.props
            // pathname是浏览器中的location
            const pathname = state.localtion.pathname
            // 根据`path`实现一个正则，通过正则匹配
            const reg = pathToReg(path, [], {end: exact})
            const result = pathname.match(reg)
            if (result) {
              return <Components />
            }
          }
          return null
        }}
      </Consumer>
    )
  }
}
