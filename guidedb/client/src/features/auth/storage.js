/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\features\auth\storage.js.ittf
*/
'use strict';
export function setTokens(token, refreshToken) {
    console.log('features.auth.storage.setTokens.token, refreshToken', token, refreshToken);
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refreshToken);
}
export function getTokens() {
    return {
            token: localStorage.getItem('token'), 
            refreshToken: localStorage.getItem('refresh_token')
        };
}
export function removeTokens() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
}
