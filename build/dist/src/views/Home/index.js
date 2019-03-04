import * as tslib_1 from "tslib";
import React, { Component } from 'react';
var Home = /** @class */ (function (_super) {
    tslib_1.__extends(Home, _super);
    function Home(props) {
        return _super.call(this, props) || this;
    }
    Home.prototype.render = function () {
        global.console.log(this.props, 'props');
        return (React.createElement("div", null, "Home"));
    };
    return Home;
}(Component));
export default Home;
//# sourceMappingURL=index.js.map