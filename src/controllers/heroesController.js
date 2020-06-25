const fs = require('fs');
const path = require('path');

var science = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), "utf8");
science = JSON.parse(science);


const heroesController = {
    index: function(req, res){
        res.send(science);                                                                                                                // Muestra toda la información del archivo json
    },


    showPresentation: function(req, res){
        let arrayConObjetoCorrecto = science.filter(function(objeto){
            return req.params.id == objeto.id;
        });

        if (arrayConObjetoCorrecto[0] != undefined){
            res.send("Hola, mi nombre es " + arrayConObjetoCorrecto[0].nombre + " y soy " + arrayConObjetoCorrecto[0].profesion);         // Muestra una presentación del personaje elegido
        }else{
            res.send("​No encontramos al científico indicado. Por favor, elija otro id​");
        }
    },

    showBio: function(req, res){
        let arrayConObjetoCorrecto = science.filter(function(objeto){
            return req.params.id == objeto.id;
        });

        if (arrayConObjetoCorrecto[0] != undefined && req.params.ok == 'ok'){
            res.send(arrayConObjetoCorrecto[0].nombre + ": " + arrayConObjetoCorrecto[0].resenia);                                        // Muestra una breve reseña del personaje elegido
        }
        if(arrayConObjetoCorrecto[0] != undefined && (req.params.ok != 'ok' || req.params.ok == undefined)){
            res.send(arrayConObjetoCorrecto[0].nombre + "​: Lamento que no desees saber más de mi :(");
        }
        if (arrayConObjetoCorrecto[0] == undefined){
            res.send("No encontramos al cientifico adecuado para mostrar su biografia")
        }

    }

}


module.exports = heroesController;                                                                                                         // Se exporta el objeto heroesController                                                      

