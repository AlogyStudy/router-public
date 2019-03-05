import React, { Component } from 'react'
import { Link, Route } from '../../react-router-dom/index'

import UserAdd from '../UserAdd/index'
import UserList from '../UserList/index'
import UserDetail from '../UserDetail/index'

export default class User extends Component {
  public constructor (props: {}) {
    super(props)
  }
  public render () {
    return (
      <div>
          <div className="col-md-2">
            <div className="nav nav-stacked">
              <li><Link to="/user/add">用户添加</Link></li>
              <li><Link to="/user/list">用户列表</Link></li>
            </div>
          </div>
          <div className="col-md-10">
            <Route path="/user/add" exact={false} component={UserAdd} />
            <Route path="/user/list" exact={false} component={UserList} />
            <Route path="/user/detail/:id" exact={false} component={UserDetail} />
          </div>
      </div>
    )
  }
}
