/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\features\config\env.js.ittf
*/
'use strict';
const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';
const KEY = `${ENV}-${PLATFORM}`;
console.log('features.config.KEY', KEY);
const DATA = {
    'development-local': {
        SERVER_URL: 'http://localhost:5000', 
        API_URL: 'http://localhost:5000/api/v1', 
        AUTH_URL: 'http://localhost:5000/api/v1/auth', 
        AUTH_PROVIDERS_URL: 'http://localhost:5000/auth'
    }, 
    get 'production-local'() {
            return this['development-local'];
    }
};
let _config = null;
export function getConfig() {
    if (_config == null) {
        _config = {
            SERVER_URL: DATA[KEY].SERVER_URL, 
            API_URL: DATA[KEY].API_URL, 
            AUTH_URL: DATA[KEY].AUTH_URL, 
            AUTH_PROVIDERS_URL: DATA[KEY].AUTH_PROVIDERS_URL
        };
        console.log('features.config', _config);
    }
    return _config;
}
