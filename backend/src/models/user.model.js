const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "username is required"],
        unique : true
    },
    email :{
        type:String,
        required: [true, "Email is required"],
        unique:true,

    },
    password : {
        type:String,
        required: true,
        minlength: [4 , "the password should be at least 4 characters long"]
    }

})


const userModel = mongoose.model("user", userSchema)


module.exports = userModel;