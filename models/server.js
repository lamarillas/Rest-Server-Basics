const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.userPaths = '/api/users';
        // MIDDLEWARES
        this.middlewares();

        // MY ROUTES APP
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        // LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() );

        // DIRECTORIO PUBLICO
        this.app.use( express.static('public') );
    }

    routes() {
        
        this.app.use(this.userPaths, require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto.', this.port);
        });
    }
}

module.exports = Server;