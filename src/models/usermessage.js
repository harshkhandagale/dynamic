const mongoose = require("mongoose")
const validator = require("validator")


const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    address: {
        type:String,
        required:true
    },  
    phone: {
        type:Number,
        required:true,
        unique:true,
        min:10
    },
    message: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

    
});

const User =  new mongoose.model("User", userSchema);
module.exports = User