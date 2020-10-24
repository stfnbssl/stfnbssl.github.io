/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\utils\api.js.ittf
*/
'use strict';
const apiUrl = 'http://localhost:5000/api/v1';
export async function callApi(path, options) {
    console.log('callApi request', apiUrl, path, options);
    const res = await fetch(`${apiUrl}/${path}`, {
            method: options.method, 
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json'
            }, 
            body: options.data ? JSON.stringify(options.data) : null
        });
    const json = await res.json();
    console.log('callApi result', json);
    return json;
}
