require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

const userRoute = require('./routes/user_routes.js')
app.use('/api/users', userRoute)

app.get('/api/health', (req,res)=>{
	res.status(200).json({
		status: 'ok',
		message: "testing api route and server"
	})
})

app.listen(PORT,()=>console.log(`Server listening on: http://localhost:${PORT}`))
