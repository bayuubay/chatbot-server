const User = require("../models/user");

const userController = () => {
  const signUp = async (req, res) => {
    try {
      const { username, email } = req.body;
      const payload = {
        username,
        email,
      };
      console.log(payload);
      const result = await User.create(payload);
      return res.json({
        message: "success",
        code: 200,
        result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { signUp };
};

module.exports = userController;
