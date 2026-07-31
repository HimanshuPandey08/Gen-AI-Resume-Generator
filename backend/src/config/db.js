const mongoose = require("mongoose");


async function connectDB() {
    
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("The Db has been connected ")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;