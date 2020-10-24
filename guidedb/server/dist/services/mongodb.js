/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\services\mongodb.js.ittf
    utc time: Mon, 20 May 2019 09:09:19 GMT
*/
'use strict';

var mongoose = require('mongoose');

module.exports = function start(config, modelBuilders) {
  var mongoUser = config.mongoUser,
      mongoPassword = config.mongoPassword,
      mongoPath = config.mongoPath;
  var connectUrl = "mongodb://".concat(mongoUser, ":").concat(mongoPassword).concat(mongoPath);
  mongoose.Promise = global.Promise;
  return mongoose.connect(connectUrl, {
    useNewUrlParser: true
  }).then(function () {
    console.log('Mongodb. Connected to', mongoPath);
    modelBuilders.forEach(function (builder) {
      return builder.buildModel();
    });
    return 'Connected';
  }, function (err) {
    throw new Error('Mongodb. Can not connect to the database. ' + err.message);
  });
};