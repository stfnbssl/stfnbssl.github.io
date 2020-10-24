/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\ga\index.js.ittf
*/
'use strict';
import {GAImageModelBuilder, GAImageModel, GASectionModelBuilder, GASectionModel, GAMessageModelBuilder, GAMessageModel} from './mongo/models';
import {GAImageController, GASectionController, GAMessageController} from './controllers/models';
const gaModels = {
    GAImageModel, 
    GASectionModel, 
    GAMessageModel
};
const gaModelBuilders = [
    GAImageModelBuilder, 
    GASectionModelBuilder, 
    GAMessageModelBuilder
];
const gaControllers = [
    new GAImageController(), 
    new GASectionController(), 
    new GAMessageController()
];
export {gaModels, gaModelBuilders, gaControllers};
