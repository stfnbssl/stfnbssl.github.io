/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\index.js.ittf
*/
'use strict';
import { LoggerMiddleware } from './logger';
import { CorsMiddleware } from './cors';
import { BodyParserMiddleware } from './bodyParser';
import { SessionMiddleware } from './session';
import { PassportMiddleware } from './passport';
import { IttfDocumentsMiddleware } from './ittf';
import { WizziViewEngineMiddleware } from './wizziViewEngine';
import { ErrorsMiddleware } from './errors';
export const appMiddlewares = [
    LoggerMiddleware, 
    CorsMiddleware, 
    BodyParserMiddleware, 
    SessionMiddleware, 
    PassportMiddleware, 
    IttfDocumentsMiddleware, 
    WizziViewEngineMiddleware
];
