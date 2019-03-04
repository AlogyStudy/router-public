import React, { Component } from 'react'
import { Consumer } from './context'
import { IStateHistory } from './state'

interface IProps {
  to: string
}

export default class Link extends Component<IProps, {}> {
  constructor (props: IProps) {
    super(props)
  }
  public render () {
    return (
      <Consumer>
        {(state: IStateHistory) => {
          return <a onClick={() => {
            state.history.push(this.props.to)
          }}>{this.props.children}</a>
        }}
      </Consumer>
    )
  }
}
