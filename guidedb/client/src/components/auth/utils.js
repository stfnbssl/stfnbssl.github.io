/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\components\auth\utils.js.ittf
*/
'use strict';
export function toParams(query) {
    const q = query.replace(/^\??\//, '');
    return q.split('&').reduce((values, param) => {
            const [key, value] = param.split('=');
            values[key] = value;
            return values;
        }, {});
}
export function toQuery(params, delimiter = '&') {
    const keys = Object.keys(params);
    return keys.reduce((str, key, index) => {
            let query = `${str}${key}=${params[key]}`;
            if (index < (keys.length - 1)) {
                query += delimiter;
            }
            return query;
        }, '');
}
