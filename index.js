const express = require('express')
const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5001

const app = express()
app.use(express.json())
app.use('/api', userRouter, postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))