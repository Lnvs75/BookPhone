var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('book_phone'); // charge le module est creer une base de donnée book phone
var id = pow.createObjectId; //permet de délégé la gestion des id à ce module
fixtures.load({
    users: [
        {
            "_id" : id(),
            "name" : "Dupont",
            "lastname" : "Maurice",
            "age" : "55",
            "job" : "technical support",
            "tel": "0123456789"
        },
        {
            "_id" : id(),
            "name" : "Dupont1",
            "lastname" : "Maurice2",
            "age" : "35",
            "job" : "technical support1",
            "tel": "01234567891"
        },
        {
            "_id" : id(),
            "name" : "Dupont2",
            "lastname" : "Maurice2",
            "age" : "28",
            "job" : "technical support2",
            "tel": "01234567892"
        }
    ]
});
