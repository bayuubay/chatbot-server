const route = require("express").Router();
const userController = require("./controllers/user")();
const messageController = require("./controllers/messages")();
module.exports = function router() {
  route.get("/", (req, res) => {
    res.json({ message: "route testing" });
  });

  //user
  route.post("/api/signup", userController.signUp);

  //messages
  route.get("/api/messages", messageController.getAllMessages);
  route.get("/api/message?:id", messageController.getMessage);
  route.post("/api/message", messageController.createMessage);
  return route;
};
