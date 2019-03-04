import React, { Component } from 'react'

export default class Home extends Component {
  constructor (props: {}) {
    super(props)
  }
  public render () {
    global.console.log(this.props, 'props')
    return (
      <div>
          Home
      </div>
    )
  }
}
