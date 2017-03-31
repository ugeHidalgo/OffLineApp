var moongoose = require ('mongoose'),
    Schema = moongoose.Schema,
    PersonSchema = new Schema ({
        personId : String,
        username : String,        
        firstname : String,
        lastname : String,
        email : String,
        phone : String,              
    });


module.exports = moongoose.model ('Person', PersonSchema);