/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\blog\mongo\post.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetPostModel = GetPostModel;
exports.PostModelBuilder = void 0;

var _mongoose = require("mongoose");

var Post = new _mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  }
}, {
  collection: 'posts'
});
var postModel = null;

function GetPostModel() {
  return postModel;
}

var PostModelBuilder = {
  buildModel: function buildModel() {
    return postModel = (0, _mongoose.model)('Post', Post);
  }
};
exports.PostModelBuilder = PostModelBuilder;