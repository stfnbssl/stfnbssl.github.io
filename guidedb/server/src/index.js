/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\index.js.ittf
*/
'use strict';
import 'babel-polyfill';
import {config} from './features/config';
import mongodbStart from './services/mongodb';
import { siteControllers } from './site';
import {authControllers, authModelBuilders} from './features/auth';
import {blogControllers, blogModelBuilders} from './features/blog';
import {gaControllers, gaModelBuilders} from './features/ga';
import {appMiddlewares} from './middleware';
import App from './App';
async function start() {
    let modelBuilders = [
        ...authModelBuilders, 
        ...blogModelBuilders, 
        ...gaModelBuilders
    ];
    await mongodbStart(config, modelBuilders);
    let middlewares = [
        ...appMiddlewares
    ];
    let controllers = [
        ...siteControllers, 
        ...authControllers, 
        ...blogControllers, 
        ...gaControllers
    ];
    const appInitializer = {
        config, 
        controllers, 
        middlewares
    };
    const app = new App(appInitializer);
    app.listen();
}
try {
    start();
} 
catch (ex) {
    console.log(ex);
} 
