/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\client\src\features\ga\api.js.ittf
*/
'use strict';
import { callApi } from '../../utils/api';
export function getGAImageList() {
    return callApi('GAImages', {
            method: 'get'
        });
}
export function createGAImage(post) {
    return callApi('GAImages', {
            method: 'post', 
            data: post
        });
}
export function getGAImage(id) {
    return callApi(`${table.collection}/${id}`, {
            method: 'get'
        });
}
export function updateGAImage(id, post) {
    return callApi(`${table.collection}/${id}`, {
            method: 'put', 
            data: post
        });
}
export function deleteGAImage(id) {
    return callApi(`${table.collection}/${id}`, {
            method: 'delete'
        });
}
export function getGASectionList() {
    return callApi('GASections', {
            method: 'get'
        });
}
export function createGASection(post) {
    return callApi('GASections', {
            method: 'post', 
            data: post
        });
}
export function getGASection(id) {
    return callApi(`${table.collection}/${id}`, {
            method: 'get'
        });
}
export function updateGASection(id, post) {
    return callApi(`${table.collection}/${id}`, {
            method: 'put', 
            data: post
        });
}
export function deleteGASection(id) {
    return callApi(`${table.collection}/${id}`, {
            method: 'delete'
        });
}
export function getGAMessageList() {
    return callApi('GAMessages', {
            method: 'get'
        });
}
export function createGAMessage(post) {
    return callApi('GAMessages', {
            method: 'post', 
            data: post
        });
}
export function getGAMessage(id) {
    return callApi(`${table.collection}/${id}`, {
            method: 'get'
        });
}
export function updateGAMessage(id, post) {
    return callApi(`${table.collection}/${id}`, {
            method: 'put', 
            data: post
        });
}
export function deleteGAMessage(id) {
    return callApi(`${table.collection}/${id}`, {
            method: 'delete'
        });
}
