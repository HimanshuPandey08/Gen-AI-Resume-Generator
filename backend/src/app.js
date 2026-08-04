const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cookieParser())



const allowedOrigins = process.env.CLIENT_URL.split(",");

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));



const authRouter = require("./routes/auth.routes")
const interviewRoter = require("./routes/interview.routes")


app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRoter)

module.exports = app ;