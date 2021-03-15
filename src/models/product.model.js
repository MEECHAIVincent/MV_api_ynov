const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    imgUrl: String,
    category: {
        type:Schema.Types.ObjectId, ref:'Category'
    }  
})

module.exports = mongoose.model('Product', productSchema);