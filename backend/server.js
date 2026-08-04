require("dotenv").config();
const app = require("./src/app");
const port = process.env.PORT || 3000 ;
const connectDB = require("./src/config/db")

connectDB();


app.set("trust proxy", 1);

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});