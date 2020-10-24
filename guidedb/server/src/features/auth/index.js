/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\auth\index.js.ittf
*/
'use strict';
import {UserModelBuilder, UserModel} from './mongo/user';
import {TokenModelBuilder, TokenModel} from './mongo/token';
import {AccountModelBuilder, AccountModel} from './mongo/account';
import {AuthController} from './controllers/auth';
import * as manager from './manager';
const authModels = {
    UserModel, 
    TokenModel, 
    AccountModel
};
const authModelBuilders = [
    UserModelBuilder, 
    TokenModelBuilder, 
    AccountModelBuilder
];
const authControllers = [
    new AuthController()
];
export {authModels, authModelBuilders, authControllers, manager};
