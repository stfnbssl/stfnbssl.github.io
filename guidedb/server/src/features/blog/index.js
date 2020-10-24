/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\blog\index.js.ittf
*/
'use strict';
import {PostModelBuilder, PostModel} from './mongo/post';
import {PostController} from './controllers/post';
const blogModels = {
    PostModel
};
const blogModelBuilders = [
    PostModelBuilder
];
const blogControllers = [
    new PostController()
];
export {blogModels, blogModelBuilders, blogControllers};
