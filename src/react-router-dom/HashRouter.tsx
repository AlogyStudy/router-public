import React, { Component } from 'react'
import { Provider } from './context'
import { IStateLocation } from './state'

export default class HashRouter extends Component<{}, IStateLocation> {
  constructor (props: {}) {
    super(props)
    this.state = {
      localtion: {
        pathname: window.location.hash.slice(1) || '/',
      }
    }
  }
  public componentDidMount () {
    window.location.hash =  window.location.hash || '/'

    // 改变hash，修改pathname
    window.addEventListener('hashchange', () => {
      this.setState({
        localtion: {
          ...this.state.localtion,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  public render () {
    const value = {
      location: this.state.localtion,
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
