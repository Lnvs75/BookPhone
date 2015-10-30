exports.affichContentConsole = function (content){
    console.log(content);
    return content;
};
exports.errFichierIntrouvable = function () {
    console.log(e);
    reponse.status(500).send('le fichier est introuvable');
    throw new Error('le fichier est introuvable');
};
exports.throwError = function (e) {
    console.log(e);
    throw new Error('ERROR');
};