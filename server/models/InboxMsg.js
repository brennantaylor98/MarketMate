const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const InboxMsgSchema = new Schema({
    from: {
        type: String,
        required: true,
        unique: false,
    },
    to:{
        type: [],
        required: true,
    },
    sent:{
        type: Date,
        required: true,
    },    
    message:{
        type: String,
        required: true,
    },   
});

const InboxMsg = model('InboxMsg', InboxMsgSchema);
module.exports = InboxMsg;
