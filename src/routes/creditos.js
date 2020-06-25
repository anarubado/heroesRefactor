const express = require('express');
const router = express.Router();
const creditosController = require('../controllers/creditosController');            // Se requiere el objeto creditosController que proveerá las funcionalidades para la página Créditos

router.get('/', creditosController.index);                                          // Se relaciona el request de la página Créditos con el método correspondiente del objeto requerido


module.exports = router;                                                            // Se exportan las implementaciones hechas al objeto router

