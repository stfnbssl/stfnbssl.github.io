/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\features\ga\controllers\models.js.ittf
*/
'use strict';
import { Router, Request, Response } from 'express';
import { sendFailure, sendSuccess } from '../../../utils/response';
import { GetGAImageModel } from '../mongo/models';
import { GetGASectionModel } from '../mongo/models';
import { GetGAMessageModel } from '../mongo/models';
export class GAImageController {
    constructor() {
        this.path = '/api/v1/GAImages';
        this.router = Router();
        this.GAImageModel = null;
    }
    initialize(initValues) {
        console.log('Entering GAImageController.initialize');
        this.GAImageModel = GetGAImageModel();
        this.router.get(`${this.path}`, this.getGAImages.bind(this));
        this.router.post(`${this.path}`, this.createGAImage.bind(this));
        this.router.get(`${this.path}/:id`, this.getGAImageById.bind(this));
        this.router.put(`${this.path}/:id`, this.updateGAImage.bind(this));
        this.router.delete(`${this.path}/:id`, this.deleteGAImage.bind(this));
    }
    getGAImages(req, res) {
        this.GAImageModel.find((err, GAImages) => {
            if (err) {
                console.log('getGAImages.err', GAImages);
                return sendFailure(res, err);
            }
            else {
                console.log('getGAImages.GAImages', GAImages);
                sendSuccess(res, {
                    GAImages: GAImages
                });
            }
        });
    }
    createGAImage(req, res) {
        console.log('Entering GAImageController.createGAImage', this);
        let GAImage = new this.GAImageModel(req.body);
        GAImage.save().then((GAImage) =>
            sendSuccess(res, {
                'message': 'GAImage created successfully'
            })).catch((err) =>
            sendFailure(res, {
                message: "GAImage could not be created.", 
                err
            }))
    }
    getGAImageById(req, res) {
        let id = req.params.id;
        this.GAImageModel.findById(id, function(err, GAImage) {
            if (err) {
                return sendFailure(res, err);
            }
            sendSuccess(res, {
                GAImage: GAImage
            });
        });
    }
    updateGAImage(req, res) {
        const id = req.params.id;
        this.GAImageModel.findById(id, (err, GAImage) => {
            if (err) {
                return sendFailure(res, err);
            }
            if (!GAImage) {
                return sendFailure(res, {
                        message: 'GAImage data not found'
                    }, 404);
            }
            else {
                GAImage.Caption = req.body.Caption;
                GAImage.Source = req.body.Source;
                GAImage.save().then((GAImage) =>
                    sendSuccess(res, {
                        message: 'GAImage update complete.'
                    })).catch((err) =>
                    sendFailure(res, {
                        message: 'GAImage could not be updated.', 
                        err
                    }, 400))
            }
        });
    }
    deleteGAImage(req, res) {
        const id = req.params.id;
        this.GAImageModel.findByIdAndRemove({
            _id: id
        }, (err, GAImage) => {
            if (err) {
                return sendFailure(res, err);
            }
            else {
                sendSuccess(res, {
                    message: 'GAImage successfully removed'
                });
            }
        });
    }
}
export class GASectionController {
    constructor() {
        this.path = '/api/v1/GASections';
        this.router = Router();
        this.GASectionModel = null;
    }
    initialize(initValues) {
        console.log('Entering GASectionController.initialize');
        this.GASectionModel = GetGASectionModel();
        this.router.get(`${this.path}`, this.getGASections.bind(this));
        this.router.post(`${this.path}`, this.createGASection.bind(this));
        this.router.get(`${this.path}/:id`, this.getGASectionById.bind(this));
        this.router.put(`${this.path}/:id`, this.updateGASection.bind(this));
        this.router.delete(`${this.path}/:id`, this.deleteGASection.bind(this));
    }
    getGASections(req, res) {
        this.GASectionModel.find((err, GASections) => {
            if (err) {
                console.log('getGASections.err', GASections);
                return sendFailure(res, err);
            }
            else {
                console.log('getGASections.GASections', GASections);
                sendSuccess(res, {
                    GASections: GASections
                });
            }
        });
    }
    createGASection(req, res) {
        console.log('Entering GASectionController.createGASection', this);
        let GASection = new this.GASectionModel(req.body);
        GASection.save().then((GASection) =>
            sendSuccess(res, {
                'message': 'GASection created successfully'
            })).catch((err) =>
            sendFailure(res, {
                message: "GASection could not be created.", 
                err
            }))
    }
    getGASectionById(req, res) {
        let id = req.params.id;
        this.GASectionModel.findById(id, function(err, GASection) {
            if (err) {
                return sendFailure(res, err);
            }
            sendSuccess(res, {
                GASection: GASection
            });
        });
    }
    updateGASection(req, res) {
        const id = req.params.id;
        this.GASectionModel.findById(id, (err, GASection) => {
            if (err) {
                return sendFailure(res, err);
            }
            if (!GASection) {
                return sendFailure(res, {
                        message: 'GASection data not found'
                    }, 404);
            }
            else {
                GASection.Number = req.body.Number;
                GASection.Title = req.body.Title;
                GASection.WeeksOfLife = req.body.WeeksOfLife;
                GASection.save().then((GASection) =>
                    sendSuccess(res, {
                        message: 'GASection update complete.'
                    })).catch((err) =>
                    sendFailure(res, {
                        message: 'GASection could not be updated.', 
                        err
                    }, 400))
            }
        });
    }
    deleteGASection(req, res) {
        const id = req.params.id;
        this.GASectionModel.findByIdAndRemove({
            _id: id
        }, (err, GASection) => {
            if (err) {
                return sendFailure(res, err);
            }
            else {
                sendSuccess(res, {
                    message: 'GASection successfully removed'
                });
            }
        });
    }
}
export class GAMessageController {
    constructor() {
        this.path = '/api/v1/GAMessages';
        this.router = Router();
        this.GAMessageModel = null;
    }
    initialize(initValues) {
        console.log('Entering GAMessageController.initialize');
        this.GAMessageModel = GetGAMessageModel();
        this.router.get(`${this.path}`, this.getGAMessages.bind(this));
        this.router.post(`${this.path}`, this.createGAMessage.bind(this));
        this.router.get(`${this.path}/:id`, this.getGAMessageById.bind(this));
        this.router.put(`${this.path}/:id`, this.updateGAMessage.bind(this));
        this.router.delete(`${this.path}/:id`, this.deleteGAMessage.bind(this));
    }
    getGAMessages(req, res) {
        this.GAMessageModel.find((err, GAMessages) => {
            if (err) {
                console.log('getGAMessages.err', GAMessages);
                return sendFailure(res, err);
            }
            else {
                console.log('getGAMessages.GAMessages', GAMessages);
                sendSuccess(res, {
                    GAMessages: GAMessages
                });
            }
        });
    }
    createGAMessage(req, res) {
        console.log('Entering GAMessageController.createGAMessage', this);
        let GAMessage = new this.GAMessageModel(req.body);
        GAMessage.save().then((GAMessage) =>
            sendSuccess(res, {
                'message': 'GAMessage created successfully'
            })).catch((err) =>
            sendFailure(res, {
                message: "GAMessage could not be created.", 
                err
            }))
    }
    getGAMessageById(req, res) {
        let id = req.params.id;
        this.GAMessageModel.findById(id, function(err, GAMessage) {
            if (err) {
                return sendFailure(res, err);
            }
            sendSuccess(res, {
                GAMessage: GAMessage
            });
        });
    }
    updateGAMessage(req, res) {
        const id = req.params.id;
        this.GAMessageModel.findById(id, (err, GAMessage) => {
            if (err) {
                return sendFailure(res, err);
            }
            if (!GAMessage) {
                return sendFailure(res, {
                        message: 'GAMessage data not found'
                    }, 404);
            }
            else {
                GAMessage.Number = req.body.Number;
                GAMessage.ChildTweet = req.body.ChildTweet;
                GAMessage.ChildPhrases = req.body.ChildPhrases;
                GAMessage.PediatricianTweet = req.body.PediatricianTweet;
                GAMessage.PediatricianPhrases = req.body.PediatricianPhrases;
                GAMessage.Images = req.body.Images;
                GAMessage.Tags = req.body.Tags;
                GAMessage.save().then((GAMessage) =>
                    sendSuccess(res, {
                        message: 'GAMessage update complete.'
                    })).catch((err) =>
                    sendFailure(res, {
                        message: 'GAMessage could not be updated.', 
                        err
                    }, 400))
            }
        });
    }
    deleteGAMessage(req, res) {
        const id = req.params.id;
        this.GAMessageModel.findByIdAndRemove({
            _id: id
        }, (err, GAMessage) => {
            if (err) {
                return sendFailure(res, err);
            }
            else {
                sendSuccess(res, {
                    message: 'GAMessage successfully removed'
                });
            }
        });
    }
}
