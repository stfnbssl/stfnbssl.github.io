/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\auth\mongo\user.js.ittf
*/
'use strict';
import { Schema, model } from "mongoose";
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const UserSchema = new Schema({
    userName: {
        type: String
    }, 
    realName: {
        type: String
    }, 
    email: {
        type: String
    }, 
    hash: {
        type: String
    }, 
    salt: {
        type: String
    }
}, {
    collection: 'users'
});
UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    console.log('features.auth.mongo.user.setPassword.salt,hash', this.salt, this.hash);
};
UserSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    console.log('features.auth.mongo.user.validatePassword.hash,this.hash', hash, this.hash);
    return this.hash === hash;
};
UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
            email: this.email, 
            id: this._id, 
            exp: parseInt(expirationDate.getTime() / 1000, 10)
        }, 'secret');
};
UserSchema.methods.toAuthJSON = function() {
    return {
            _id: this._id, 
            email: this.email, 
            token: this.generateJWT()
        };
};
let userModel = null;
export function GetUserModel() {
    return userModel;
}
export const UserModelBuilder = {
    buildModel: () =>
        userModel = model('User', UserSchema)
};
