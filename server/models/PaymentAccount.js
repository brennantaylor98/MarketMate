const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const PaymentAccountSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5,
    },
    lastname:{
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    cardnumber:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    zip:{
        type: Number,
        required: true,
        unique: false,
        trim: true,
    },
    cvv:{
        type: Number,
        required: true,
        unique: false,
        trim: true,
        maxlength: 3,
    },
});

const PaymetAccount = model('PaymentAccount', PaymentSchema);
module.exports = PaymentAccountSchema;
