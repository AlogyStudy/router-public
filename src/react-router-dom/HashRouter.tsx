import React, { Component } from 'react'
import { Provider } from './context'
import { IStateLocation } from './state'

export default class HashRouter extends Component<{}, IStateLocation> {
  public constructor (props: {}) {
    super(props)
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/',
      }
    }
  }
  public componentDidMount () {
    window.location.hash =  window.location.hash || '/'

    // 改变hash，修改pathname
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  public render () {
    let value = {
      location: this.state.location,
      history: {
        push (to: string) {
          window.location.hash = to
        }
      }
    }
    return (
      <Provider value={value}>
        { this.props.children }
        {/* 获取子组件里内容 */}
      </Provider>
    )
  }
}
