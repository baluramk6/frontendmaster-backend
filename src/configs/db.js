const mongoose = require("mongoose")
require("dotenv").config()

const connect = () => {
  return mongoose.connect(`${process.env.MONGO_DB_URL}`);
};

module.exports = connect;

//Chandrakant: "mongodb+srv://abc12:abc12@cluster0.bjtpv.mongodb.net/web15?retryWrites=true&w=majority"