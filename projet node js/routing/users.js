var users = require('../controllers/users.js');
var session = require('express-session');

app.get('/users', users.index);

app.post('/chercheuntilisateur', users.one);
app.post('/ajouter1utilisateur', users.create);
app.put('/users', users.update);
app.delete('/users/:id', users.delete);
app.get('/formadd', users.pageAjouterContact);
app.get('/showcontacts', users.index);

app.use(session({
    secret: 'CestSuper SECRET',
    resave: false,
    saveUninitialized: true
}));

app.get('/set-name', function (req, res) {
    req.session.name = "Connect";
    res.send('TT');
});

app.get('/get-name', function (req, res) {
    res.send(req.session.name);
});

app.get('/destroy', function (req, res) {
    req.session.destroy(function () {
        res.send('FINI');
    });
});