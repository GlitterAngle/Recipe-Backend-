import 'dotenv/config.js'
import './config/database.js'

import express from 'express'
import morgan from 'morgan'
import {log} from 'mercedlogger'
import cors from 'cors'

//this is where i will import my routes 
import recipeRoutes from './routes/recipeRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

//this is wehre i set up my middleware(express.json(), and cors)
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))//log the request for debugging

//routse when they are built will go here
app.use('/api/recipes', recipeRoutes)
app.use('/api/user', userRoutes)

app.listen(PORT,function(){
    log.green('SERVER STATUS', `Listeneing on port ${PORT}`)
})