/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\wizzi\factory.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilesystemFactory = createFilesystemFactory;

var path = _interopRequireWildcard(require("path"));

var wizzi = _interopRequireWildcard(require("wizzi"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createFilesystemFactory(_x) {
  return _createFilesystemFactory.apply(this, arguments);
}

function _createFilesystemFactory() {
  _createFilesystemFactory = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(globalContext) {
    var gc;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            gc = {};
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              return wizzi.fsFactory({
                plugins: {
                  items: ['wizzi-core', 'wizzi-js', 'wizzi-web']
                },
                globalContext: Object.assign({}, gc, globalContext || {})
              }, function (err, wf) {
                if (err) {
                  return reject(err);
                }

                resolve(wf);
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createFilesystemFactory.apply(this, arguments);
}