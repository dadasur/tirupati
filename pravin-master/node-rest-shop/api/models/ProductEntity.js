const mongoose = require('mongoose');

const ProductEntity = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId, //special datatype by mongoose
    name : {type : String, required : true},
    price : {type : String, required : true}
});
 
module.exports = mongoose.model('product',ProductEntity); 