/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\auth\mongo\token.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTokenModel = GetTokenModel;
exports.TokenModelBuilder = exports.TokenSchema = void 0;

var _mongoose = require("mongoose");

var TokenSchema = new _mongoose.Schema({
  kind: {
    type: String
  },
  token: {
    type: String
  },
  attributes: {
    type: Map,
    of: String
  }
});
exports.TokenSchema = TokenSchema;
var tokenModel = null;

function GetTokenModel() {
  return tokenModel;
}

var TokenModelBuilder = {
  buildModel: function buildModel() {
    return tokenModel = (0, _mongoose.model)('Token', TokenSchema);
  }
};
exports.TokenModelBuilder = TokenModelBuilder;