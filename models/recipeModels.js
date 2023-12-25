import mongoose from 'mongoose'
import User from './userModels.js'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    imagePath: {type: String, required: true},
    ingredients: {type: String, required: true},
    directions: {type: String, required: true},
    story: {type: String},
    //this does not go in an arrray braket because the recipe can be owned by one user if multiple useres can own one recipe they it would be in array brackets
    user: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
},
//mongoose has a built in timestamps option so it handles the createdAt and updatedAt for you
 {timestamps: true})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe