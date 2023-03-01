const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastname:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    city:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    state:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    zip:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    photo:{
        type: String,
        required: false,
        unique: true,
        trim: true,
    },      

});

const Profile = model('Profile', profileSchema);
module.exports = Profile;
