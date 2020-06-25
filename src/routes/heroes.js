const express = require('express');                                         
const router = express.Router();
const heroesController = require('../controllers/heroesController');            // Se requiere el objeto heroesController que proveerá las funcionalidades para las distintas páginas del recurso

router.get('/', heroesController.index);                                        // Se definen las rutas para manejar los distintos tipos de requests    

router.get('/detalle/:id', heroesController.showPresentation);

router.get('/bio/:id/:ok?', heroesController.showBio);

module.exports = router;                                                        // Se exportan las implementaciones hechas al objeto router