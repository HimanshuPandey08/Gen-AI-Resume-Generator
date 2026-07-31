require("dotenv").config();
const app = require("./src/app");
const port = process.env.PORT ;
const connectDB = require("./src/config/db")

connectDB();




app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});