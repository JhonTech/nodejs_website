//IMPORTAMOS EXPRESS
var express = require('express');
var router = express.Router(); //Metodo para crear rutas



//CREAMOS LAS RUTAS

//Ruta index
router.get('/', (req, res) => {
  //mostramos el archivos
  res.render('index.html', {title: 'Website Nodejs'});
});

//Ruta contact
router.get('/contact', (req, res) => {
  //mostramos el archivos
  res.render('contact.html', {title: 'Contact Page'});
});

//IMPORTAMOS LAS RUTAS
module.exports = router;
