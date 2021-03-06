var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var bcrypt = require('bcryptjs');

//The URL which will be queried. Run "mongod.exe" for this to connect

mongoose.Promise = global.Promise;
var mongoDB = 'mongodb://localhost:27017/HappySharing';

mongoose.Promise = global.Promise;
try {
    connection = mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        checkServerIdentity: false,
    });
    console.log('connection to mongodb worked!');
    console.log('the port is 3001');

// db.dropDatabase();

} catch (e) {
    console.log('error in db connection: ' + e.message);
}
