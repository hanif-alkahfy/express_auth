const AuthService = require("../services/AuthService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { token, user } = await AuthService.loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Login berhasil",
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await AuthService.registerUser(username, email, password);

    return res.status(201).json({
      success: true,
      message: "Registrasi berhasil",
      data: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Sesuaikan status kode error berdasarkan jenis error
    const statusCode = error.message.includes('duplikasi') || error.message.includes('Duplicate entry') ? 409 : 400; 
    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  login,
  register,
};