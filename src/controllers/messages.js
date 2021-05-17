const Message = require("../models/messages");

const messageController = () => {
  const getAllMessages = async (req, res) => {
    try {
      const result = await Message.find({}, "title");
      return res.json({
        message: "success",
        code: 200,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getMessage = async (req, res) => {
    try {
      const { id } = req.query;
      const result = await Message.findOne({ _id: id }, "description");
      return res.json({
        message: "success",
        code: 200,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const createMessage = async (req, res) => {
    try {
      const { title, description } = req.body;
      const payload = {
        title,
        description,
      };
      const result = await Message.create(payload);
      return res.json({
        message: "success",
        code: 200,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllMessages, getMessage, createMessage };
};

module.exports = messageController;
