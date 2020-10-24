/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\passport.js.ittf
*/
'use strict';
import { manager as authManager } from '../features/auth';
export const PassportMiddleware = (app) => {
    const passport = authManager.getPassport();
    app.use(passport.initialize());
    app.use(passport.session());
};
