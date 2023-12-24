import mongoose from 'mongoose'
import User from './userModels.js'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    imagePath: {type: String, required: true},
    ingredients: {type: String, required: true},
    directions: {type: String, required: true},
    story: {type: String},
    user: [{type: mongoose.Schema.Types.ObjectId,ref: "User"}]

})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe