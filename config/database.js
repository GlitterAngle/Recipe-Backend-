import mongoose from 'mongoose'

//shortcut to mongoos.connection object
const db = mongoose.connection

//connect to the database
mongoose.connect(process.env.DATABASE_URI)

db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})