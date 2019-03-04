import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Provider } from './context';
var HashRouter = /** @class */ (function (_super) {
    tslib_1.__extends(HashRouter, _super);
    function HashRouter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            localtion: {
                pathname: window.location.hash.slice(1) || '/',
            }
        };
        return _this;
    }
    HashRouter.prototype.componentDidMount = function () {
        var _this = this;
        window.location.hash = window.location.hash || '/';
        // 改变hash，修改pathname
        window.addEventListener('hashchange', function () {
            _this.setState({
                localtion: tslib_1.__assign({}, _this.state.localtion, { pathname: window.location.hash.slice(1) || '/' })
            });
        });
    };
    HashRouter.prototype.render = function () {
        var value = {
            location: this.state.localtion
        };
        return (React.createElement(Provider, { value: value },
            global.console.log(value, 'value----'),
            this.props.children));
    };
    return HashRouter;
}(Component));
export default HashRouter;
//# sourceMappingURL=HashRouter.js.map