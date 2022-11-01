const mongoose = require("mongoose");

const MYSCHEMA = new mongoose.Schema({
    name : {
        type : String,

        require : true
    },

    surname : {
        type: String,

        require : true
    },

    Students_id : {
        type: String,

        require : true
    },

    age : {
        type : Number,

        require: true,

        min : 10,

        max : 100
    },

    hobbies : {
        type : [String],

        require : false
    },

    AMKA : {
        type : String,

        require : true,
        
        // minLength : 10,

    },

    AFM : {
        type : String,

        require : true,

        // minLength : 10
    }






});


module.exports = mongoose.model("User" , MYSCHEMA);