//aplicacion de nodejs
//Autor: @nahuellamas
//Fecha: 15/07/2021
//Descripcion:
//  Este archivo es el encargado de iniciar la aplicacion
//  y leer los archivos de configuracion
//  para poder iniciar la aplicacion
//  
//
//
//

//Incluimos las librerias necesarias
const express = require('express');  
const path = require('path');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const APP = express();    //instancia de la aplicación


//importamos rutas
const indexRoutes = require('./routes/index');

//Iniciamos la aplicación
APP.set('port', process.env.PORT || 5000);
APP.set('views', path.join(__dirname, 'views'));
APP.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(APP.get('views'), 'layouts'),
    partialsDir: path.join(APP.get('views'), 'partials'),
    extname: '.hbs'
}));
APP.set('view engine', '.hbs');
//que entienda los formularios
APP.use(express.urlencoded({extended: false}));
APP.use(express.json());
//rutas
APP.use(require('./routes/index'));
//Statics files
APP.use(express.static(path.join(__dirname, 'Public')));
//start server
APP.listen(APP.get('port'), () => {
    console.log(`Server en puerto ${APP.get('port')}`);
});
