const mongoose = require("mongoose");
require('dotenv').config()
const mongoConnect = async () => {
  mongoose
    .connect(process.env.MONGODB, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb Connected"))
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
