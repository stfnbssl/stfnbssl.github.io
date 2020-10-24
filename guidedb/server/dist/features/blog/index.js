/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\blog\index.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogControllers = exports.blogModelBuilders = exports.blogModels = void 0;

var _post = require("./mongo/post");

var _post2 = require("./controllers/post");

var blogModels = {
  PostModel: _post.PostModel
};
exports.blogModels = blogModels;
var blogModelBuilders = [_post.PostModelBuilder];
exports.blogModelBuilders = blogModelBuilders;
var blogControllers = [new _post2.PostController()];
exports.blogControllers = blogControllers;