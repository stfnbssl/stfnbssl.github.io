/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\session.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionMiddleware = void 0;

var _express = require("express");

var _mongoose = require("mongoose");

var _config = require("../features/config");

var session = require('express-session');

var mongoSessionStore = require('connect-mongo');

var SessionMiddleware = function SessionMiddleware(app) {
  var MongoStore = mongoSessionStore(session);
  var cookieOptions = {
    // serve secure cookies, requires https
    secure: app.get('env') === 'production' ? true : false,
    httpOnly: true,
    // expires in 14 days
    maxAge: 14 * 24 * 60 * 60 * 1000
  };
  var sessionOptions = {
    name: 'demo-mern.sid',
    secret: _config.config.sessionSecret,
    store: new MongoStore({
      mongooseConnection: _mongoose.connection,
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

exports.SessionMiddleware = SessionMiddleware;