require('dotenv')
const {Pool} = require('pg')

const pool new Pool({
	connectionString:process.env.DATAURL_URL,
	ssl:process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false}
})

const query = (text, params)=>pool.query(text,params)

module.exports = {pool, query}
