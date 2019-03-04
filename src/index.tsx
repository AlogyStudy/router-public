import React, { Component } from 'react'
import { render } from 'react-dom'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { HashRouter as Router, Route, Link } from './react-router-dom'

import Home from './views/Home/index'
import Profile from './views/Profile/index'
import User from './views/User/index'

export default class App extends Component {
  constructor (props: {}) {
    super(props)
  }
  public render () {
    return (
      <Router>
        <div>
          <div>
            <Link to="/home">首页</Link>
            <Link to="/profile">个人中心</Link>
            <Link to="/user">用户</Link>
          </div>
          <div>
            <Route path="/home" exact={false} component={Home} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/profile" exact={false} component={Profile} />
            <Route path="/user"  exact={false} component={User} />
          </div>
        </div>
      </Router>
    )
  }
}

render(<App />, document.querySelector('#root'))
