const {query} = require('../config/db.js')

const createUser=async({email, password})=>{
	const sql = `
	INSERT INTO users(email, password)
	VALUES($1, $2, $3)
	RETURNING id,email,created_at
	`;
	const values = [email,paswsword];
	const result = await query(sql,values)
	return result.rows[0]
}

const findUserByEmail=async(email)=>{
	const sql = `
	SELECT * FROM users 
	WHERE email = $1
	`
	const values = [email]
	const result await query(sql,values)
	return result.rows[0]
}

module.exports={createUser,findUserByEmail}
