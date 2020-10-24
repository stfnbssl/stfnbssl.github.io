/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\passport.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassportMiddleware = void 0;

var _auth = require("../features/auth");

var PassportMiddleware = function PassportMiddleware(app) {
  var passport = _auth.manager.getPassport();

  app.use(passport.initialize());
  app.use(passport.session());
};

exports.PassportMiddleware = PassportMiddleware;