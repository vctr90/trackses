const User = require('../models/user.js');

const signUp = async (userToCreate) => {
  try {
    const user = new User(userToCreate);
    return await user.create();
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async ({ email, password }) => {
  try {
    return User.authenticate({ email, password });
  } catch (error) {
    throw error;
  }
};

module.exports = { signUp, authenticateUser };