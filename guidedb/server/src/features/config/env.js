/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\config\env.js.ittf
*/
'use strict';
import path from 'path';
import {cleanEnv, str, bool, port} from 'envalid';
let config = null;
function validateEnv() {
    let checkedEnv = cleanEnv(process.env, {
        PORT: port(), 
        SESSION_SECRET: str(), 
        MONGO_PASSWORD: str(), 
        MONGO_PATH: str(), 
        MONGO_USER: str(), 
        GITHUB_CLIENT_ID: str(), 
        GITHUB_CLIENT_SECRET: str(), 
        GITHUB_CALLBACK_URL: str(), 
        CORS_CLIENT_ORIGINL: str()
    });
    return checkedEnv;
}
export default function create() {
    if (config == null) {
        const __ittfPath = path.join(__dirname, '..', '..', '..', '..', 'ittf');
        const checkedEnv = validateEnv();
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
            MetaHtmlIttfPath: path.join(__ittfPath, 'meta', 'html', 'index.html.ittf'), 
            MetaFolderIttfPath: path.join(__ittfPath, 'meta', 'folder', 'index.html.ittf'), 
            MetaHtmlTextPath: path.join(__ittfPath, 'meta', 'text', 'index.html.ittf')
        };
        Object.keys(config).forEach((element) => {
            if (element.indexOf("Pass") < 0 && element.indexOf("Secr") < 0) {
                console.log('Created config', element, config[element]);
            }
        });
    }
    return config;
}
