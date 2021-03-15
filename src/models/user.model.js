const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        // maxlength: 50,
        unique: true
    },
    tel: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    address: {
        type: String,
    },
    orders: [{
        type:Schema.Types.ObjectId, ref:'Order'
    }]
})

module.exports = mongoose.model('User', userSchema);