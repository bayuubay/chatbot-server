const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

module.exports = function mainApp(port) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/", routes());

  app.listen(port, () => console.log(`app run on port ${port}`));

  return app;
};
