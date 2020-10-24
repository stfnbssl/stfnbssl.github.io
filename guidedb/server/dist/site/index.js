/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\site\index.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.siteControllers = void 0;

var _home = require("./controllers/home");

var _auth = require("./controllers/auth");

var siteControllers = [new _home.HomeController(), new _auth.AuthController()];
exports.siteControllers = siteControllers;