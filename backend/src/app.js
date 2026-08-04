const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cookieParser())



app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));



const authRouter = require("./routes/auth.routes")
const interviewRoter = require("./routes/interview.routes")


app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRoter)

module.exports = app ;