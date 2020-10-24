/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\logger.js.ittf
*/
'use strict';
export const LoggerMiddleware = (app) =>
    app.use((request, response, next) => {
        console.log(`${new Date().toString()} ${request.method} ${request.path}`);
        next();
    });
