var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017'

var dbName = 'HappySharing'

function connect(callback) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            console.log('wrong databases')
        } else {
            var db = client.db(dbName)
            callback && callback(db)
            client.close();
        }
    })
}

module.exports = {connect}

