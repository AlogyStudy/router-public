import React, { Component } from 'react'
import { Consumer } from './context'
import { IStateHistory } from './state'

interface IProps {
  to: string
}

export default class Redirect extends Component<IProps, {}> {
  public constructor (props: IProps) {
    super(props)
  }
  public render () {
    return (
      <Consumer>
        {(state: IStateHistory) => {
            // 重定向，匹配不到后直接跳转redirect中的to路径
            state.history.push(this.props.to)
            return null
        }}
      </Consumer>
    )
  }
}
