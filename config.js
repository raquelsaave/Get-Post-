'use strict'
const express = require('express');
//necesarios para POST
var path = require('path');

exports.setup = (app) => {
	app.use(express.json());
	app.use(express.urlencoded());
	// para poder hacer formularios
	app.set('views', path.join(__dirname, './views'));
	app.set('view engine', 'html');
	app.engine('html', require('hbs').__express);
} 