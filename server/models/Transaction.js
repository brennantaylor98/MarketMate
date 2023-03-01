const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const TransactionSchema = new Schema({
    purchase: {
        type: Boolean,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
    },
    sale:{
        type: Boolean,
        required: false,
        unique: true,
        trim: true,
    },
});

const Transaction = model('Transaction', TransactionSchema);
module.exports = Transaction;
