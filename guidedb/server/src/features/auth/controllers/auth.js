/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\auth\controllers\auth.js.ittf
*/
'use strict';
import { Router, Request, Response } from 'express';
import { sendBadRequest, sendServerError, sendSuccess } from '../../../utils/response';
import { GetUserModel } from '../mongo/user';
import {authenticate, jwtAuth} from '../manager';
export class AuthController {
    constructor() {
        this.path = '/api/v1/auth';
        this.router = Router();
        this.userModel = null;
    }
    initialize(initValues) {
        console.log('Entering AuthController.initialize');
        this.userModel = GetUserModel();
        this.router.get(`${this.path}/login`, this.login.bind(this));
        this.router.use((req, res, next) => {
            if (req.query.socketId) {
                console.log('features.auth.controllers.auth.middleware.req.originalUrl,query', req.originalUrl, req.query);
                console.log('features.auth.controllers.auth.middleware.req.sessionID, session', req.sessionID, req.session);
                req.session.socketId = req.query.socketId;
                req.session.socketUserId = req.query.socketUserId;
            }
            next();
        });
        this.router.post(`${this.path}/local/register`, jwtAuth.optional, this.localRegister.bind(this));
        this.router.post(`${this.path}/local/login`, jwtAuth.optional, this.localLogin.bind(this));
        this.router.get(`${this.path}/local/profile`, jwtAuth.required, this.localProfile.bind(this));
        this.router.get(`/auth/github`, authenticate('github', {
            scope: [
                'user:email'
            ]
        }), this.githubConnect.bind(this));
        this.router.get(`/auth/github/callback`, authenticate('github', {
            failureRedirect: `${this.path}/account`
        }), this.githubConnectCallback.bind(this));
    }
    login(req, res, next) {
        res.send('Go back and register!');
    }
    github(req, res, next) {
        // The request will be redirected to GitHub for authentication, so this
        // function will not be called.
    }
    githubCallback(req, res, next) {
        // Successful authentication
        console.log('features.auth.controllers.auth.githubCallback.req.user', req.user);
        res.json(req.user);
    }
    localLogin(req, res, next) {
        const {
            body: {
                user
            }
        } = req;
        if (!user.email) {
            return sendBadRequest(res, {
                    errors: {
                        email: 'is required'
                    }
                }, 422);
        }
        if (!user.password) {
            return sendBadRequest(res, {
                    errors: {
                        password: 'is required'
                    }
                }, 422);
        }
        console.log('features.auth.controllers.auth.localLogin.email,password', user.email, user.password);
        return authenticate('local', {
                session: false
            }, (err, passportUser, info) => {
                if (err) {
                    console.log('features.auth.controllers.auth.localLogin.err', err);
                    return next(err);
                }
                console.log('features.auth.controllers.auth.localLogin.passportUser,info', passportUser, info);
                if (passportUser) {
                    const user = passportUser;
                    user.token = passportUser.generateJWT();
                    console.log('features.auth.controllers.auth.localLogin.token', user.token);
                    return sendSuccess(res, {
                            user: user.toAuthJSON()
                        });
                }
                return sendBadRequest(res, info);
            })(req, res, next)
        ;
    }
    localRegister(req, res, next) {
        const {
            body: {
                user
            }
        } = req;
        if (!user.email) {
            return sendBadRequest(res, {
                    errors: {
                        email: 'is required'
                    }
                }, 422);
        }
        if (!user.password) {
            return sendBadRequest(res, {
                    errors: {
                        password: 'is required'
                    }
                }, 422);
        }
        console.log('features.auth.controllers.auth.localRegister.email,password', user.email, user.password);
        const registeredUser = new this.userModel(user);
        registeredUser.setPassword(user.password);
        return registeredUser.save().then(() =>
                sendSuccess(res, {
                    user: registeredUser.toAuthJSON()
                }))
        ;
    }
    localProfile(req, res, next) {
        console.log('features.auth.controllers.auth.localProfile.req.payload', req.payload);
        const {
            payload: {
                id
            }
        } = req;
        return this.userModel.findById(id).then((user) => {
                console.log('features.auth.controllers.auth.localProfile.user', user);
                if (!user) {
                    sendBadRequest(res, {
                        message: 'User not found'
                    });
                }
                return sendSuccess(res, {
                        user: user.toAuthJSON()
                    });
            })
        ;
    }
    githubConnect(req, res, next) {
        // The request will be redirected to GitHub for authentication,
        // so this function will not be called.
    }
    githubConnectCallback(req, res, next) {
        // Successful authentication
        console.log('features.auth.controllers.auth.githubCallback.req.originalUrl,session.socketId,socketUserId', req.originalUrl, req.session.socketId, req.session.socketUserId);
        console.log('features.auth.controllers.auth.githubCallback.req.sessionID,session', req.sessionID, req.session);
        console.log('features.auth.controllers.auth.githubCallback.req.user', req.user);
        const io = req.app.get('io');
        const user = {
            name: req.user.displayName, 
            avatar_url: req.user.avatar_url
        };
        io.in(req.session.socketId).emit('github', user);
        res.end();
    }
}
