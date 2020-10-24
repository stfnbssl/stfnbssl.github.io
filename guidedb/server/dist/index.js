/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\index.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

require("babel-polyfill");

var _config = require("./features/config");

var _mongodb = _interopRequireDefault(require("./services/mongodb"));

var _site = require("./site");

var _auth = require("./features/auth");

var _blog = require("./features/blog");

var _middleware = require("./middleware");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var modelBuilders, middlewares, controllers, appInitializer, app;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            modelBuilders = [].concat(_toConsumableArray(_auth.authModelBuilders), _toConsumableArray(_blog.blogModelBuilders));
            _context.next = 3;
            return (0, _mongodb["default"])(_config.config, modelBuilders);

          case 3:
            middlewares = _toConsumableArray(_middleware.appMiddlewares);
            controllers = [].concat(_toConsumableArray(_site.siteControllers), _toConsumableArray(_auth.authControllers), _toConsumableArray(_blog.blogControllers));
            appInitializer = {
              config: _config.config,
              controllers: controllers,
              middlewares: middlewares
            };
            app = new _App["default"](appInitializer);
            app.listen();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

try {
  start();
} catch (ex) {
  console.log(ex);
}