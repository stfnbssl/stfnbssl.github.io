/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\config\env.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = create;

var _path = _interopRequireDefault(require("path"));

var _envalid = require("envalid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = null;

function validateEnv() {
  var checkedEnv = (0, _envalid.cleanEnv)(process.env, {
    PORT: (0, _envalid.port)(),
    SESSION_SECRET: (0, _envalid.str)(),
    MONGO_PASSWORD: (0, _envalid.str)(),
    MONGO_PATH: (0, _envalid.str)(),
    MONGO_USER: (0, _envalid.str)(),
    GITHUB_CLIENT_ID: (0, _envalid.str)(),
    GITHUB_CLIENT_SECRET: (0, _envalid.str)(),
    GITHUB_CALLBACK_URL: (0, _envalid.str)(),
    CORS_CLIENT_ORIGINL: (0, _envalid.str)()
  });
  return checkedEnv;
}

function create() {
  if (config == null) {
    var __ittfPath = _path["default"].join(__dirname, '..', '..', '..', '..', 'ittf');

    var checkedEnv = validateEnv();
    config = {
      port: checkedEnv.PORT,
      sessionSecret: checkedEnv.SESSION_SECRET,
      mongoPath: checkedEnv.MONGO_PATH,
      mongoUser: checkedEnv.MONGO_USER,
      mongoPassword: checkedEnv.MONGO_PASSWORD,
      githubClientID: checkedEnv.GITHUB_CLIENT_ID,
      githubClientSecret: checkedEnv.GITHUB_CLIENT_SECRET,
      githubCallbackURL: checkedEnv.GITHUB_CALLBACK_URL,
      corsClientOrigin: checkedEnv.CORS_CLIENT_ORIGINL,
      MetaHtmlIttfPath: _path["default"].join(__ittfPath, 'meta', 'html', 'index.html.ittf'),
      MetaFolderIttfPath: _path["default"].join(__ittfPath, 'meta', 'folder', 'index.html.ittf'),
      MetaHtmlTextPath: _path["default"].join(__ittfPath, 'meta', 'text', 'index.html.ittf')
    };
    Object.keys(config).forEach(function (element) {
      if (element.indexOf("Pass") < 0 && element.indexOf("Secr") < 0) {
        console.log('Created config', element, config[element]);
      }
    });
  }

  return config;
}