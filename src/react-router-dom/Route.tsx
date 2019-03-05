import React, { Component } from 'react'
import { Consumer } from './context'
import { IState } from './state'

import pathToReg from 'path-to-regexp'

interface IProps {
  path: string
  exact: boolean
  component: any
}

export default class Route extends Component<IProps, {}> {
  public constructor (props: IProps) {
    super(props)
  }
  public render () {
    return (
      <Consumer>
        {(state: IState) => {
          // path 是route中传递的
          let { path, component: Components, exact=false } = this.props
          // pathname是浏览器中的location
          let pathname = state.location.pathname
          // 根据`path`实现一个正则，通过正则匹配
          let keys: Array<any> = []
          let reg = pathToReg(path, keys, {end: exact})
          let result = pathname.match(reg)
          keys = keys.map((item) => item.name)
          let [url = '/', ...values] = result || []
          let props = {
            location: state.location,
            history: state.history,
            match: {
              url,
              params: keys.reduce((obj, current, index) => {
                obj[current] = values[index]
                return obj
              }, {})
            }
          }
          if (result) {
            return <Components {...props} />
          }
          return null
        }}
      </Consumer>
    )
  }
}
