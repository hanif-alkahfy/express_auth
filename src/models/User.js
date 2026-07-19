const db = require('../config/database');

const findByEmail = async (email) => {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0];
};

module.exports = {
  findByEmail,
};