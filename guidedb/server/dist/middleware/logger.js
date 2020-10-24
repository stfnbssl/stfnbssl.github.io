/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\middleware\logger.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggerMiddleware = void 0;

var LoggerMiddleware = function LoggerMiddleware(app) {
  return app.use(function (request, response, next) {
    console.log("".concat(new Date().toString(), " ").concat(request.method, " ").concat(request.path));
    next();
  });
};

exports.LoggerMiddleware = LoggerMiddleware;