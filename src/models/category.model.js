const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title: {
        type: String,
        lowercase: true
    }
})

module.exports = mongoose.model('Category', categorySchema);