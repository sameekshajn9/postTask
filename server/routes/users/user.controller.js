const User = require('./user.model');

const verifyUsername = async (req, res) => {
  try {
    const { username, password } = req.body;
    req.checkBody('username', 'Username is empty').notEmpty();
    req.checkBody('password', 'Password is empty').notEmpty();

    const errors = req.validationErrors();
    if (errors && errors.length > 0) {
      return res.json({ status: 400, message: errors[0].msg });
    }

    let user = await User.findOne({ username, password });
    if (user) {
      return res.json({
        status: 200,
        message: 'User already Exist.'
      });
    } else {
      return res.json({
        status: 400,
        message: "User doesn't Exist."
      });
    }
  } catch (err) {
    return res.json({ status: 400, message: 'Invalid User' });
  }
};

module.exports.verifyUsername = verifyUsername;
