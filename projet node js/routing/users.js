var users = require('../controllers/users.js');
app.get('/users', users.index);

app.post('/chercheuntilisateur', users.one);
app.post('/ajouter1utilisateur', users.create);
app.put('/users', users.update);
app.delete('/users/:id', users.delete);
app.get('/formadd', users.pageAjouterContact);
app.get('/showcontacts', users.index);