/*
    artifact generator: C:\My\wizzi\stfnbssl\stfnbssl.github.io\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\stfnbssl.github.io\guidedb\.wizzi\ittf\server\src\App.js.ittf
*/
'use strict';
import express from 'express';
const http = require('http');
const socketio = require('socket.io');
class App {
    constructor(initValues) {
        this.config = initValues.config;
        this.port = this.config.port;
        this.app = express();
        this.server = http.createServer(this.app);
        initValues.middlewares.forEach((middleware) =>
            middleware(this.app));
        initValues.controllers.forEach((controller) => {
            console.log('installing router on path: ', controller.path);
            controller.initialize(initValues);
            this.app.use('/', controller.router);
        });
        // Connecting sockets to the server and adding them to the request
        // so that we can access them later in the controller
        const io = socketio(this.server);
        io.set('transports', [
            'websocket', 
            'polling'
        ]);
        this.app.set('io', io);
        // Catch a start up request so that a sleepy server instance (p.e. Heroku) can
        // be responsive as soon as possible
        this.app.get('/wake-up', (req, res) =>
            res.send('👍'));
    }
    listen() {
        this.server.listen(this.port, () =>
            console.log(`App listening at http://localhost:${this.port}`));
    }
}
export default App;
