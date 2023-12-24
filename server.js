import 'dotenv/config.js'
import './config/database.js'

import express from 'express'
import cors from 'cors'

//this is where i will import my routes 

const app = express()
const PORT = process.env.PORT || 3000

//this is wehre i set up my middleware(express.json(), and cors)
app.use(express.json())
app.use(cors())

//routse when they are built will go here

app.listen(PORT,function(){
    console.log(`App running on ${PORT} port`)
})