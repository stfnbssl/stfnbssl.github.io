/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\cors.js.ittf
*/
'use strict';
import cors from 'cors';
import {config} from '../features/config';
const whitelist = [
    config.corsClientOrigin
];
export const CorsMiddleware = (app) => {
    const options = {
        origin: config.corsClientOrigin, 
        credentials: true
    };
    app.use(cors(options));
};
