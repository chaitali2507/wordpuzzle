var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    name:{
        type:String
    },
    randomstring:{
        type:String
    },
    merge:{
        type:String
    },
});
module.exports= mongoose.model("puzzle",firstschema);