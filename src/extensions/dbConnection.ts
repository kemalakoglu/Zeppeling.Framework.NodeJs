import Mongoose from "mongoose";

let database: Mongoose.Connection;
export const connect = () => {
    // add your own uri below
    const uri = "mongodb://localhost:27017/ZeppelingFramework";
    if (database) {
        return;
    }
    Mongoose.connect(uri);
    database = Mongoose.connection;
    database.once("open", async () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};
export const disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};