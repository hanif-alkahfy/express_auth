const bcrypt = require("bcrypt");
const User = require("../models/User");

const login = async (email, password) => {
  const user = await User.findByEmail(email);

  if (!user) {
    throw new Error("Email atau password salah");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Email atau password salah");
  }

  return user;
};

module.exports = {
  login,
};