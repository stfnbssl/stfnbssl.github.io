/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\session.js.ittf
*/
'use strict';
import {Application, Request, Response, RequestHandler, CookieOptions} from 'express';
const session = require('express-session');
const mongoSessionStore = require('connect-mongo');
import { connection as mongooseConnection } from 'mongoose';
import {config} from '../features/config';
export const SessionMiddleware = (app) => {
    const MongoStore = mongoSessionStore(session);
    const cookieOptions = {
        // serve secure cookies, requires https
        secure: app.get('env') === 'production' ? true : false, 
        httpOnly: true, 
        // expires in 14 days
        maxAge: 14 * 24 * 60 * 60 * 1000
    };
    const sessionOptions = {
        name: 'demo-mern.sid', 
        secret: config.sessionSecret, 
        store: new MongoStore({
            mongooseConnection: mongooseConnection, 
            // save session 14 days
            ttl: 14 * 24 * 60 * 60
        }), 
        cookie: cookieOptions, 
        resave: true, 
        saveUninitialized: true
    };
    /**
        
         if (!dev) {
         server.set('trust proxy', 1); // trust first proxy
         }
        
    */
    app.use(session(sessionOptions));
};
