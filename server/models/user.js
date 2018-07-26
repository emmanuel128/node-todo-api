var mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not valid.'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }],
    // name: {
    //     type: String,
    //     required: true,
    //     minLength: 1,
    //     trim: true
    // },
    // location: {
    //     type: String,
    //     default: null
    // },
    // age: {
    //     type: Number,
    //     required: true
    // }
});

module.exports = { User };