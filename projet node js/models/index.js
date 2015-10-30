/**
 * Created by ANDZEKANDE on 19/10/2015.
 */
    // module schema
var users = require('../schema/users');

// création d'un model
exports.User = mongoose.model('User', users.schema);