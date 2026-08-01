const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true 
}))


const authRoutes = require("./routes/auth.routes")



app.use("/api/auth", authRoutes)


module.exports = app ;