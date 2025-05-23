const bcrypt = require('bcrypt')

const hashPassword=async(plainPassword)=>{
	return await bcrypt.hash(plainPassword, 10)
}
const comparePasswords=async(plainPassword,hashedPassword)=>{
	return await bcrypt.compare(plainPassword,hashedPassword)
}

module.exports={hashPassword, comparePasswords}
