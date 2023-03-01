const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserStatSchema = new Schema({
    number: {
        type: Number,
        required: true,
    },
    createdOn:{
        type: Date,
        required: true,
    },
    comment:{
        type: String,
        required: false,
    },       
});

const UserStat = model('UserStat', UserStatSchema);
module.exports = UserStat;
