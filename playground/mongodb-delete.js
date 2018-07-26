// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to MongoDB server', error);
        }

        // console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // deleteMany
        // db.collection('Todos').deleteMany({ text: 'Something to do' }).then(result => {
        //     console.log(result);
        // });

        // deleteOne
        // db.collection('Todos').deleteOne({ text: 'Something to do' }).then(result => {
        //     console.log(result);
        // });

        // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({ completed: true }).then(result => {
        //     console.log(result);
        // });

        db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b41509b0d8f2c1e18e89af6") }).then(result => {
            console.log(JSON.stringify(result, null, 2));
        });

        client.close();
    });