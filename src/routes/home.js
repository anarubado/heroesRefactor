const express = require("express");                                         // Se requiere el módulo express     
const router = express.Router();                                            // Se guarda la ejecución del método Router el cual modulariza todo el sistema de ruteo
const homeController = require("../controllers/homeController");            // Se requiere el objeto homeController que proveerá las funcionalidades para la página Home

router.get("/", homeController.index);                                      // Se relaciona el request de la página Home con el método correspondiente del objeto requerido

module.exports = router;                                                    // Se exportan las implementaciones hechas al objeto router 