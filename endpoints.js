'use strict';

const express = require('express');
//para obtener contenidos de archivo services
const services = require('./services');


exports.routes = (app) => {
// EJEMPLOS DE GET ------------------------------------------------------
	app.get('/', (request, response) => {
		response.send('hello world!');
	});

	// Regresa el usuario ya establecido
	app.get('/usuario', (request, response) => {
		const usuario = {
	 	name:"Raquel",
	 	edad: 23
	 	}
	 	response.send(usuario);
	});


	// Regresa el nombre completo junto
	app.get('/usuarios', (request, response) => {
	 	const name = request.query.name;
	 	const age = request.query.age;
	 	const ageName = age + " " + name;
	 	response.send(ageName);
	});

	// Regresa la suma de 2 numeros
	app.get('/suma', (request, response) => {
		const num1 = request.query.num1;
		const num2 = request.query.num2;
		const resul = parseInt(num1) + parseInt(num2);
		response.send ( ' Resultado de suma = ' + resul);
	});
	 
	// Va a mandar como respuesta un archivo json 
	app.get('/json', (request, response) => {
		const nombre = request.query.nom;
		const apellido = request.query.apell;
		const sexo = request.query.sex;
		const json = { Nombre: nombre,
		Apellido: apellido,
		Sexo: sexo
		};
		response.json (json);
	}); 

	// Regresa correo completo ( con @gmail.com) solo ingresando la primera parte 
	app.get('/correo', (request, response) => {
		const corre = request.query.email;
		const completo = corre + "@gmail.com";
		response.send (completo);
	}); 

	// Regresa la edad, ingresando el año de nacimiento 
	app.get('/edad', (request, response) => {
		var fecha = new Date(); // Obtiene fecha del equipo
		var currentYear = fecha.getFullYear(); // Obtiene el año de la fecha
		const year = request.query.nacimiento;
		const edad = parseInt(currentYear)-parseInt(year);
		response.send(" Edad = " + edad);
	}); 

	// Para mandar html
	app.get('/html', (request, response) => {
		response.render('form');
	}); 

 
	// EJEMPLOS DE DELETE------------------------------------------------------
	app.delete('/borrar', (request , response) => {
		const id = request.query.id;
		//aqui es donde se borra el recurso
		response.send('Se borro ' + id);
	});

	// EJEMPLOS DE POST------------------------------------------------------
	 app.post('/datos' , (request , response) => {
	 	const postData = request.body;
	 	services.addId(postData);
	 	response.json(postData);	
 	});

	 //Para la pagina html
	app.post('/form', (request, response) => {
		const data =  request.body;
		response.send(data);
	});

}