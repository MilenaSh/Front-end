'use strict';

//Nonde relative db. With non relative db when we check for a collection if it is not yet cleated mongo db will create it

const mongodb = require('mongodb');

//instance
const MongoClient = mongodb.MongoClient;

//connection components

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'Students';

const connectionString = '${protocol}/${server}/${databaseName}';

MongoClient.connect(connectionString)
    .then((databaseConnection) => {
        databaseConnection.collection('Names').insert({
            firstName: 'Milena',
            lastName: 'Shishkova',
            age: 26
        });
    })
    .catch((error) => {
        console.log(error);
    });