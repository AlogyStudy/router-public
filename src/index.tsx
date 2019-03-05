import React, { Component } from 'react'
import { render } from 'react-dom'
// import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom'

import Home from './views/Home/index'
import Profile from './views/Profile/index'
import User from './views/User/index'

import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
  public constructor (props: {}) {
    super(props)
  }
  public render () {
    return (
      <Router>
        <div>
          <div className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-heading">
                <div className="navbar-brand">react router</div>
              </div>
              <div className="nav navbar-nav">
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/profile">个人中心</Link></li>
                <li><Link to="/user">用户</Link></li>
              </div>
            </div>
          </div>
          <div className="container">
            <Switch>
              <Route path="/home" exact={false} component={Home} />
              {/* <Route path="/home" exact={true} component={Home} /> */}
              <Route path="/profile" exact={false} component={Profile} />
              <Route path="/user"  exact={false} component={User} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

render(<App />, document.querySelector('#root'))
