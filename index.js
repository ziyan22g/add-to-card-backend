import express from 'express'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import env pakage 
import dotenv from 'dotenv'
import { userRoutes } from './src/routes/userRoutes.js'
import { authRoutes } from './src/routes/authRoutes.js'
import { connectDB } from './src/config/db.js'
dotenv.config()
const port = process.env.PORT || 3000


app.use(cors({
    origin : 'http://localhost:5174',
    credentials : true
}))

app.use(express.json())
app.use(cookieParser())

// connect Db
connectDB()


// routes 
app.use('/api/user' ,userRoutes)
app.use('/api/auth' , authRoutes)



app.listen(port ,()=>{
    console.log(`Server Ready on http://localhost:${port}`);
})
