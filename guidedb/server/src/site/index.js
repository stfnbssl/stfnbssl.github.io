/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\site\index.js.ittf
*/
'use strict';
import {HomeController} from './controllers/home';
import {AuthController} from './controllers/auth';
const siteControllers = [
    new HomeController(), 
    new AuthController()
];
export {siteControllers};
