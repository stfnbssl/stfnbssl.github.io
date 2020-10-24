/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\auth\index.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manager = exports.authControllers = exports.authModelBuilders = exports.authModels = void 0;

var _user = require("./mongo/user");

var _token = require("./mongo/token");

var _account = require("./mongo/account");

var _auth = require("./controllers/auth");

var manager = _interopRequireWildcard(require("./manager"));

exports.manager = manager;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var authModels = {
  UserModel: _user.UserModel,
  TokenModel: _token.TokenModel,
  AccountModel: _account.AccountModel
};
exports.authModels = authModels;
var authModelBuilders = [_user.UserModelBuilder, _token.TokenModelBuilder, _account.AccountModelBuilder];
exports.authModelBuilders = authModelBuilders;
var authControllers = [new _auth.AuthController()];
exports.authControllers = authControllers;