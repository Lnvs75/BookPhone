
exports.index = function (requette, reponse) {
    var reponseFichierJson = function(content){
        reponse.json(content);
    };
    var errFichierIntrouvable = function(e){
        console.log(e);
        reponse.status(500).send('le fichier est introuvable');
        throw new Error('le fichier est introuvable');
    };
    fs.readFileAsync('test.json')
        .catch(errFichierIntrouvable)
        .then(libLog.affichContentConsole)
        .then(JSON.parse)

        .done(reponseFichierJson)
    ;


    console.log('autre chose');

};