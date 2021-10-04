const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const userSchema= mongoose.Schema({
    firstname:String, 
    lastname:String, 
    email: {
        type:String, 
        required: [true, "enter e mail"]
    },
    password: {
        type:String, 
        required:[true, "enter password"]
    },
    createdAt :{
        type: Date, 
        default:  moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    adress:{
        type:String,
    },
    country:{
        type:String,
    },
    code_zip:{
        type:Number,
    },
    role:{
        type:String,
        enum:['user']
    }
})

module.exports = mongoose.model('user',userSchema)