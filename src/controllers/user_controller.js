const { createUser, findUserByEmail } = require('../models/user_model.js');
const { hashPassword, comparePasswords } = require('../utils/hash.js');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    const passwordHash = await hashPassword(password);
    const newUser = await createUser({ email, passwordHash });

    return res.status(201).json({
      message: 'User registered successfully.',
      user: {
        id: newUser.id,
        email: newUser.email
      }
    });
  } catch (err) {
    console.error('Register Error:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await findUserByEmail(email);
    if (!user || !(await comparePasswords(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    return res.status(200).json({
      message: 'Login successful.',
      user: {
        id: user.id,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Login Error:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { register, login };
