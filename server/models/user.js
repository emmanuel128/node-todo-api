var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    location: {
        type: String,
        default: null
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = { User };