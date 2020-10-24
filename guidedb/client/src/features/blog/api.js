/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\features\blog\api.js.ittf
*/
'use strict';
import { callApi } from '../../utils/api';
export function getPostList() {
    return callApi('posts', {
            method: 'get'
        });
}
export function createPost(post) {
    return callApi('posts', {
            method: 'post', 
            data: post
        });
}
export function getPost(id) {
    return callApi(`posts/${id}`, {
            method: 'get'
        });
}
export function updatePost(id, post) {
    return callApi(`posts/${id}`, {
            method: 'put', 
            data: post
        });
}
export function deletePost(id) {
    return callApi(`posts/${id}`, {
            method: 'delete'
        });
}
