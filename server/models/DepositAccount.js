const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const DepositAccountSchema = new Schema({
    accountname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
    },
    accountnumber:{
        type: Number,
        required: true,
        unique: true,
    },
    routingnumber:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
});

const DepositAccount = model('DepositAccount', DepositAccountSchema);
module.exports = DepositAccount;
