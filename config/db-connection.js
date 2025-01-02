const mongoose = require("mongoose");

require("dotenv").config();
// env var
const { DB_USERNAME, DB_PASSWORD, DB_SERVER, DB_PORT, DB_NAME } = process.env;



const connectDB = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(`mongodb://${DB_SERVER}:${DB_PORT}/${DB_NAME}`, {
            auth: {
                username: DB_USERNAME,
                password: DB_PASSWORD,
            },
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // keepAlive: true,
            // seCreateIndex: true,
            // useFindAndModify: false,
        })
        .then(() => {
            console.log(
                "Database connected successful==" +
                `mongodb://${DB_SERVER}:${DB_PORT}/${DB_NAME}`
            );
        })
        .catch((err) => {
           console.log("Database connection error::" + err);
        });
};

module.exports = connectDB;
