import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    //define the schema for user
    userName: {type: String, uinque: true, required: true},
    email: {type: String, uinque: true, required: true, validate: {
        validator: function(value){
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
         },
         message: 'Invalid email address format',
        },
    },

})

const User = mongoose.model('User', userSchema)

export default User