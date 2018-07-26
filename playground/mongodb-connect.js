// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to MongoDB server', error);
        }

        // console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // Insert TODO
        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert todo', error);
        //     }

        //     console.log(JSON.stringify(result.ops, null, 2));
        // });

        // Insert User
        // db.collection('Users').insertOne({
        //     name: 'Emmanuel Castro',
        //     age: 24,
        //     location: 'Puerto Rico'
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert user', error);
        //     }

        //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), null, 2));
        // });

        client.close();
    });