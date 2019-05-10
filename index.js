"use strict";

const express = require('express');
//para obtener contenidos de archivo config.js (se manda a llamar sin extension .js)
const config = require('./config');
//para obtener contenidos de archivo endpoints
const endpoints = require('./endpoints');

const app = express();
const port = 3000;

config.setup(app);
endpoints.routes(app);



app.listen(port, () => console.log('El servidor esta corriendo'))