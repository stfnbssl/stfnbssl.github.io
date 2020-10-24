/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\auth\strategies\local.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStrategy = createStrategy;

var _passportLocal = require("passport-local");

var _user = require("../mongo/user");

var _config = require("../../config");

var userModel = null;

function createStrategy() {
  userModel = (0, _user.GetUserModel)();
  console.log('features.auth.strategies.local.createStrategy');
  return new _passportLocal.Strategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]'
  }, function (email, password, done) {
    console.log('features.auth.strategies.local.verify.email,password', email, password);
    userModel.findOne({
      email: email
    }).then(function (user) {
      if (!user || !user.validatePassword(password)) {
        console.log('features.auth.strategies.local.verify.false');
        return done(null, false, {
          errors: {
            'email or password': 'is invalid'
          }
        });
      }

      console.log('features.auth.strategies.local.verify.true.user', user);
      return done(null, user);
    })["catch"](done);
  });
}