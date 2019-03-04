import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { render } from 'react-dom';
// import { HashRouter as Router, Route } from 'react-router-dom'
import { HashRouter as Router, Route } from './react-router-dom';
import Home from './views/Home/index';
import Profile from './views/Profile/index';
import User from './views/User/index';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement("div", null,
                "// @ts-ignore",
                React.createElement(Route, { path: "/home", component: Home })
            // @ts-ignore
            ,
                "// @ts-ignore",
                React.createElement(Route, { path: "/profile", component: Profile })
            // @ts-ignore
            ,
                "// @ts-ignore",
                React.createElement(Route, { path: "/user", component: User }))));
    };
    return App;
}(Component));
export default App;
render(React.createElement(App, null), document.querySelector('#root'));
//# sourceMappingURL=index.js.map