/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\services\mongodb.js.ittf
*/
'use strict';
const mongoose = require('mongoose');
module.exports = function start(config, modelBuilders) {
    const { mongoUser, mongoPassword, mongoPath } = config;
    const connectUrl = `mongodb://${mongoUser}:${mongoPassword}${mongoPath}`;
    mongoose.Promise = global.Promise;
    return mongoose.connect(connectUrl, {
            useNewUrlParser: true
        }).then(() => {
            console.log('Mongodb. Connected to', mongoPath);
            modelBuilders.forEach((builder) =>
                builder.buildModel());
            return 'Connected';
        }, (err) => {
            throw new Error('Mongodb. Can not connect to the database. ' + err.message);
        })
    ;
};
