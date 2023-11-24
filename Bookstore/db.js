const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    // perform database connection
    connectToDb: (cb) => {
        // connection string
        // work with MongoDB locally, the connection string will be following
        MongoClient.connect('mongodb://localhost:27017/bookstore')
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    // return database connection
    getDb: () => dbConnection
}