const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
    },
    description:{
        type: String,
        required: false,
        unique: true,
        trim: true,
    },
    photo:{
        type: String,
        required: false,
        unique: true,
        trim: true,
    },
    condition:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },   
    price:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
    }
    ,
    zip_code:{
        type: Number,
        required: false,
        unique: true,
        trim: true,
    },       

});

const Listing = model('Listing ', ListingSchema);
module.exports = Listing;
