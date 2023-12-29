import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    //define the schema for user
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, validate: {
        validator: function(value){
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
         },
         message: 'Invalid email address format',
        },
    },
    imagePath: {type: String}

})

const User = mongoose.model('User', userSchema)

export default User