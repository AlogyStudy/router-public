import React, { Component } from 'react'

import { IState } from '../../react-router-dom/state'

interface RefObject<T> {
  readonly current: T | null
}

export default class UserAdd extends Component<IState> {
  public text: RefObject<HTMLInputElement>
  public constructor (props: IState) {
    super(props)
    this.text = React.createRef()
  }
  public handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    this.props.history.push('/user/list')
  }
  public render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.text} />
        <button type="submit">提交</button>
      </form>
    )
  }
}
