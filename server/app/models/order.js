var moongoose = require ('mongoose'),
    Schema = moongoose.Schema,
    OrderSchema = new Schema ({
        orderId : String,        
        description : String,        
        amount : { type : Number, default : 0 },                
        payment : { type : Boolean, default : false }                
    });


module.exports = moongoose.model ('Order', OrderSchema);