const mainApp = require("./src/app");
const mongoConnect = require("./src/config/database");
const port = process.env.PORT || 5000;
(async () => {
  try {
    await mongoConnect();
    await mainApp(port);
  } catch (error) {
    console.log(error);
  }
})();
