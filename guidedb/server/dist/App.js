/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\App.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var http = require('http');

var socketio = require('socket.io');

var App =
/*#__PURE__*/
function () {
  function App(initValues) {
    var _this = this;

    _classCallCheck(this, App);

    this.config = initValues.config;
    this.port = this.config.port;
    this.app = (0, _express["default"])();
    this.server = http.createServer(this.app);
    initValues.middlewares.forEach(function (middleware) {
      return middleware(_this.app);
    });
    initValues.controllers.forEach(function (controller) {
      console.log('installing router on path: ', controller.path);
      controller.initialize(initValues);

      _this.app.use('/', controller.router);
    }); // Connecting sockets to the server and adding them to the request
    // so that we can access them later in the controller

    var io = socketio(this.server);
    io.set('transports', ['websocket', 'polling']);
    this.app.set('io', io); // Catch a start up request so that a sleepy server instance (p.e. Heroku) can
    // be responsive as soon as possible

    this.app.get('/wake-up', function (req, res) {
      return res.send('👍');
    });
  }

  _createClass(App, [{
    key: "listen",
    value: function listen() {
      var _this2 = this;

      this.server.listen(this.port, function () {
        return console.log("App listening at http://localhost:".concat(_this2.port));
      });
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;