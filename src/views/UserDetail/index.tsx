import React, { Component } from 'react'
import { IStateMatch } from '../../react-router-dom/state'

export default class UserDetail extends Component<IStateMatch> {
  public constructor (props: IStateMatch) {
    super(props)
  }
  public render () {
    return (
      <div>
          UserDetail - {this.props.match.params.id}
      </div>
    )
  }
}
