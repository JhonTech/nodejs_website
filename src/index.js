//CREAMOS EL SERVIDOR
const express = require('express')
const app = express();
const path = require('path'); //modulo para directorios

//SETTINGS
app.set('port', 3000);         //puerto
app.set('views', path.join(__dirname + '/views')); //configuramos la ruta de los archivos a mostrar
app.engine('html', require('ejs').renderFile); //mostrar archivos ejs como html
app.set('view engine','ejs');  //motor de plantilla



// MIDDLEWARES: Comprobacion antes de llegar a las rutas (ROUTER)


// ROUTER
app.use(require('./routes/index.js')); //archivo de las rutas


// STATIC FILES
//ruta para acceder a todos los archivos estaticos fotos videos css, js
app.use(express.static(path.join(__dirname + '/public')));



//LISTENING THE SERVER
app.listen(app.get('port'), () => {
  console.log('Server on port: ',app.get('port'));
});
