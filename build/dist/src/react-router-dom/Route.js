import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Consumer } from './context';
var Route = /** @class */ (function (_super) {
    tslib_1.__extends(Route, _super);
    function Route(props) {
        return _super.call(this, props) || this;
    }
    Route.prototype.render = function () {
        var _this = this;
        return (React.createElement(Consumer, null, function (state) {
            global.console.log(state, 'state111');
            if (state.localtion) {
                global.console.log(123123);
                var _a = _this.props, path = _a.path, Components = _a.component;
                var pathname = state.localtion.pathname;
                // 根据`path`实现一个正则，通过正则匹配
                if (pathname === path) {
                    return React.createElement(Components, null);
                }
            }
            return null;
        }));
    };
    return Route;
}(Component));
export default Route;
//# sourceMappingURL=Route.js.map