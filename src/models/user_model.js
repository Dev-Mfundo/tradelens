const { query } = require('../config/db.js');

const createUser = async ({ email, passwordHash }) => {
  const sql = `
    INSERT INTO users(email, password_hash)
    VALUES($1, $2)
    RETURNING id, email, created_at
  `;
  const values = [email, passwordHash];
  const result = await query(sql, values);
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const sql = `
    SELECT * FROM users 
    WHERE email = $1
  `;
  const values = [email];
  const result = await query(sql, values);
  return result.rows[0];
};

console.log("models passed");
module.exports = { createUser, findUserByEmail };
