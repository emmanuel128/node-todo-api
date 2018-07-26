// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to MongoDB server', error);
        }

        // console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // db.collection('Todos').find({ _id: new ObjectID('5b4155ae55fdb7df6092bd2f') }).toArray().then((docs) => {
        //     console.log('TODOS');
        //     console.log(JSON.stringify(docs, null, 2));
        // }, err => {
        //     return console.log('Unable to fetch todos', error);
        // });

        // db.collection('Todos').find().count().then((count) => {
        //     console.log(`TODOS count: ${count}`);
        // }, err => {
        //     return console.log('Unable to fetch todos', error);
        // });

        db.collection('Users').find({ name: 'Emmanuel Castro' }).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, null, 2));
        }, err => {
            return console.log('Unable to fetch todos', error);
        });

        client.close();
    });