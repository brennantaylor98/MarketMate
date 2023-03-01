const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const CategorySchema = new Schema({
    home: {
        type: Boolean,
        required: False,
        unique: true,
    },
    clothing: {
        type: Boolean,
        required: False,
        unique: true,
    },
    garden: {
        type: Boolean,
        required: False,
        unique: true,
    },
    electronics: {
        type: Boolean,
        required: False,
        unique: true,
    },
    vehicles: {
        type: Boolean,
        required: False,
        unique: true,
    },
    kids: {
        type: Boolean,
        required: False,
        unique: true,
    },
    pet_supplies: {
        type: Boolean,
        required: False,
        unique: true,
    },
    toys: {
        type: Boolean,
        required: False,
        unique: true,
    },
    health: {
        type: Boolean,
        required: False,
        unique: true,
    },
    tickets: {
        type: Boolean,
        required: False,
        unique: true,
    },
    hobbies: {
        type: Boolean,
        required: False,
        unique: true,
    },
    other: {
        type: Boolean,
        required: False,
        unique: true,
    },
     

});

const Category = model('Category', CategorySchema);
module.exports = Category;
