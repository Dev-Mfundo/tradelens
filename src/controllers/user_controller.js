const {createUser,findUserByEmail} = require('../models/usermodel.js')
const { hashPassword, comparePasswords } = require('../utils/hash')

const register = async(req,res)=>{
	try{
		const {email, password} = req.body
		if(!email || !password){
			return res.send().status(400).json({
				error: 'All fields must are required'
			})
		}

		const existingUser =await findUserByEmail(email)
		if(existingUser){
			return res.send().status(409).json({
				error: 'User already exists'
			})
		}

		const passwordHash =  await hashPassword(paswsword)
		const newUser = await createUser({email,passwordHash})

	}catch(err){
		return res.send(500).json({
			error: 'Internal server error'})
	}
}


const login = async(req,res)=>{
	try{
		const {email, password} = req.body
		if(!email || !password){
			return res.send().json(400).json({
				error: 'Email and Password required'
			})
		}
		const user = await findUserByEmail(email)
		if(!user){
			return res.send().status(400).json({
				error: 'Invalid credentials'
			})

		}
		const isValid = await comparePasswords(password, user.password_hash);           if(!isValid){
		        return res.status(401).json({
				error: 'Invalid credentials.' 
			});
	        }
	}catch(err){
		res.send().status(500).json({
			error: 'Internal server error'
		}) 
	}
}


module.exports={register, login}
