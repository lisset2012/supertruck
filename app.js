//ruta incial de express 1
const express = require('express');
const path = require('path')//modulo que viene con express, se usa para 
const bodyParser = require('body-parser');//es un middleware. Hace que el servidor express entienda el metodo POST
const app = express(); //ejecuta express y recibe un objeto

const routes = require('./routes/index');

//settings
app.set('port',process.env.PORT || 3000);//es como crear una variable 'port'
app.set('views', path.join(__dirname, 'views'));//dandole el path the la carpeta views al servidor express. Hay que usar metodos de la dependecia path que viene con express
app.set('view engine', 'ejs');//no se necesita de requerir ejs porque express trabaja con el por defecto

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname,'')))

//ruta inicial de express 2 o starts the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});//inicializa express una vez recibe el objeto