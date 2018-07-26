// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to MongoDB server', error);
        }

        // console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5b415f5655fdb7df6092be97')
        }, {
                $set: {
                    completed: false
                }
            })
            .then((result) => {
                console.log(JSON.stringify(result, null, 2));
            });

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5b41599155fdb7df6092bdab')
        }, {
                $set: { name: 'Emmanuel' },
                $inc: { age: 1 }
            })
            .then((result) => {
                console.log(JSON.stringify(result, null, 2));
            });

        client.close();
    });