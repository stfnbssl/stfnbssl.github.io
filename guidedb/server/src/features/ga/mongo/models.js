/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\ga\mongo\models.js.ittf
*/
'use strict';
import { Schema, model } from "mongoose";
const GAImageSchema = new Schema({
    Caption: {
        type: String
    }, 
    Source: {
        type: String
    }
}, {
    collection: 'GAImages'
});
let GAImageModel = null;
export function GetGAImageModel() {
    return GAImageModel;
}
export const GAImageModelBuilder = {
    buildModel: () =>
        GAImageModel = model('GAImage', GAImageSchema)
};
const GASectionSchema = new Schema({
    Number: {
        type: Number
    }, 
    Title: {
        type: String
    }, 
    WeeksOfLife: {
        type: Number
    }
}, {
    collection: 'GASections'
});
let GASectionModel = null;
export function GetGASectionModel() {
    return GASectionModel;
}
export const GASectionModelBuilder = {
    buildModel: () =>
        GASectionModel = model('GASection', GASectionSchema)
};
const GAMessageSchema = new Schema({
    Number: {
        type: Number
    }, 
    ChildTweet: {
        type: String
    }, 
    ChildPhrases: {
        type: [String]
    }, 
    PediatricianTweet: {
        type: String
    }, 
    PediatricianPhrases: {
        type: [String]
    }, 
    Images: {
        type: [GAImageSchema]
    }, 
    Tags: {
        type: [String]
    }
}, {
    collection: 'GAMessages'
});
let GAMessageModel = null;
export function GetGAMessageModel() {
    return GAMessageModel;
}
export const GAMessageModelBuilder = {
    buildModel: () =>
        GAMessageModel = model('GAMessage', GAMessageSchema)
};
