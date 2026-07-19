const AuthService = require("../services/AuthService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AuthService.login(email, password);

    return res.status(200).json({
      success: true,
      message: "Login berhasil",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  login,
};