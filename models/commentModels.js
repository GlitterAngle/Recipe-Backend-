import mongoose from 'mongoose'
import User from './userModels.js'
import Recipe from './recipeModels.js'

const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {type: String, required: true},
    //this does not go in an arrray braket because the recipe can be owned by one user if multiple useres can own one recipe they it would be in array brackets
    user: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
    recipe: {type: mongoose.Schema.Types.ObjectId,ref: "Recipe"},
    star_rating: {type: Number, min: 1, max: 5, validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
    }}
},
//mongoose has a built in timestamps option so it handles the createdAt and updatedAt for
 {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)
