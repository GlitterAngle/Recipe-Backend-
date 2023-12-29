import mongoose from 'mongoose'
import {log} from 'mercedlogger'

//shortcut to mongoos.connection object
const db = mongoose.connection

//connect to the database
mongoose.connect(process.env.DATABASE_URI)

db.on('open', function(){
    log.green(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
db.on('close', function(){
    log.magenta("Database State", "connection Open")
})
db.on("error", function(error){
    log.red("Database State", error)
})

export{
    mongoose
}