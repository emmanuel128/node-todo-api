const { ObjectID } = require('mongodb')

var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');

Todo.remove({}).then((result) => {

});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: ''}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('asdfg').then((todo) => {
    console.log(todo);
});