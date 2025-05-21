const bcrypt = require('bcrypt')

const hashPassword=async(plainPassword)=>await bcrypt.hash(plainPassword, 10)
const comparePasswords=async(plainPassword,hashedPassword)=>await bcrypt.compare(plainPassword,hashedPassword)

module.exports={hashPassword, comparePasswords}
