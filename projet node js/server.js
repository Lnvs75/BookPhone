/**
 * Created by ANDZEKANDE on 18/10/2015.
 */
// Promise en globale
Promise = require('bluebird');
// en global avec le module bluebird
mongoose = Promise.promisifyAll(require('mongoose'));
//mongoose = require('mongoose');
// on charge notre library en global
libLog = require('./lib/log.js');
var path = require("path");

// fs en globale
fs = Promise.promisifyAll(require('fs'));

var express = require("express");
var engine = require('ejs-locals');




// ici nous mettons le app en globale pour pouvoir l'ututiliser dans tout les nos fichier
app = express();
//permet de creer un helper pour activé ou désactiver le layout
//permet aussi d'envoyer un objet pour effectuer des traiteman desus



app.set('view engine', 'ejs');
// recuperation du body parser
var bodyParser = require('body-parser');
app.use(bodyParser());
// indique a express d'utiliser le bodyParser avec la methode urlencoded qui permet de récupérer et  parser les information d'un formulaire
app.use(bodyParser.urlencoded({ extended: true  }));

//permet d'indiquer le dossier static qui posséde nos fichier
app.use(express.static('public'));
// connection de mongoose a la base de donnée book_phone
mongoose.connect('mongodb://localhost/book_phone');

//import models en global
models = require('./models/index.js');


// importer le routing callback
require('./routing/callback.js');

//importé routing users
require('./routing/users.js');





// console.log(new models.users()); test si mongoose fonctionne bien renvoi un id





app.listen(3000);

