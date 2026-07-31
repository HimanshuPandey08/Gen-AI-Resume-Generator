const mongoosse = require("mongoose");


const blacklistTokenSchema= new mongoosse.Schema({

    token:{
        type:String,
        required:[true,"Token Required "]
    }

}, { timestamps:true}
)

const tokenBlacklistModel =  mongoosse.model("blacklistToken", blacklistTokenSchema)

module.exports = tokenBlacklistModel