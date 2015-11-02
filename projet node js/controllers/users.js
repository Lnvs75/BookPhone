/**
 * Created by ANDZEKANDE on 18/10/2015.
 */
exports.index = function(requete, reponse){

    var retourReponse = function (objet) {
        reponse.render('showcontacts.ejs' , {users : objet});
        return objet;
    };
    // sort({name : -1}) décroisant sort({name : 1}) croisant .limit(2) limiter l'affiche à 2 utilisateur
    //execAsync permet d'utiliser les fonction de mongoose de base et ensuite l'executé de façon Async pour pouvoir utiliser les then
    //select('name age') permet de sélectionner les champs que l'on veut récuperer
    //seclect('-name') permet d'exclure les champs que on ne veut pas
    models.User.find().sort({name : 1}).execAsync()
    // models.users.find().sort({name : 1}).execAsync()
        .then(retourReponse)
        .then(libLog.affichContentConsole)

};

exports.one = function(requete, reponse) {
    // requette.params.name permet d'aller chercher le nom du paramètre dans l'url.
   console.log(requete.body.objetutilisateur);
    if(requete.body.objetutilisateur){
        models.User.findOne({'name' : requete.body.objetutilisateur}, function(err,user) {
            if(!err){
                if(user){
                    console.log(user);

                    reponse.render('afficheuncontact.ejs', {"users" : user});
                }else{
                    reponse.render('errserchcontact.ejs');
                }

            }else{

            }
        });
    }
};


exports.create = function(requete, reponse){
    var envoiOkretouneRep = function(content){

        console.log("la sauvegarde en base a été effectuer correctement");
        reponse.json(content);
        return content;

    };

    // Mongodb d'origine ne permet pas de récupérer les information des requete en post pour on a besoin d'installer le module body-parser
    // la methode save() permet de sauvegarder les donnée en base
    models.User(requete.body).save()
        .then(libLog.affichContentConsole)
        .then(envoiOkretouneRep)
};

exports.update = function(requete, reponse){
    var envoiOkretouneRep = function(content){
        console.log("la modification en base a été effectuer correctement");
        reponse.json(content);
        return content;
    };
    // cette fonction permet de faire une recherche dans la base pour afficher l'information modifier
    var option = {_id : requete.body._id};
    var retouneUpdateObject = function () {
        models.User.findOneAsync(option)
            .then(libLog.affichContentConsole)
            .then(envoiOkretouneRep);
    };

    // permet de retrouver le id que l'on veut modifier
    // suprime la clé _id
    delete requete.body['_id'];
    // Mongodb d'origine ne permet pas de récupérer les information des requete en post pour on a besoin d'installer le module body-parser

    models.User.findOneAndUpdateAsync(option, requete.body )
        .then(retouneUpdateObject);
};

exports.delete = function (requete, reponse) {
    var envoiOkretouneRep = function(content){
        console.log("l'utilasateur en base a été suprimé");
        reponse.json({message : 'supression ok'});
        return content;
    };

    var returnErreur = function () {
        reponse.status(500).json({message : 'Supression imposible'});
    };
var option = {_id : requete.params.id };
    models.User.findOneAndRemoveAsync(option)
        .catch(libLog.throwError)
        //done prend 2 paramètre done(si tout ce passe bien, si une erreur)
        .done(envoiOkretouneRep, returnErreur);


};

exports.pageAjouterContact = function (requete, reponse) {
    reponse.render('user.ejs');
};
