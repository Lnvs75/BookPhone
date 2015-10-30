/**
 * Created by ANDZEKANDE on 19/10/2015.
 */
exports.schema = new mongoose.Schema({

    name : {type : String, maxlength : 50},
    lastname : {type : String, maxlength : 50},
    age : {type: String, min : 10, max : 100},
    job : String,
    tel : { type : String, maxlength : 12}
});