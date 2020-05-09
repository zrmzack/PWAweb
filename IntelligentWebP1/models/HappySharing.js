var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HappySharing = new Schema(
    {
        user_name:{type:String,required:true,max:20},
        stories:{type:String,           max: 150},
        date:{type:String},
        image1:{type:String},
        image2:{type:String},
        image3:{type:String},
        image4:{type:String}
    }
);

var HappySharingMode = mongoose.model('HappySharing',HappySharing);

module.exports =HappySharingMode;