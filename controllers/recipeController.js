import Recipe from '../models/recipeModels.js'

//create get for all recipes and putting error handling 
const getAllRecipes = async () =>{
    try{ 
      return await Recipe.find({})
    } catch (error) {
        console.error('Error fetching all recipes: this message comes from your recipe controller', error)
    }
}

// create get for individual users recipe and errror handle
const getSingleRecipe = async (id)=>{
    try {
        return await Recipe.findOne({_id: id})
    } catch (error) {
        console.error('Error fetching user recipes: this message comse from your recipe controller', error)
    }
}

// create get for recipe by id and error handle
const getRecipeByUser = async (userId)=>{
    try {
        //this will retur all recipes by that user findOne will bring only one recipe. and the populate user will allow me to put in the user name 
        return await Recipe.find({user: userId}).populate('user')
    } catch (error) {
        console.error('Error fetching all of users recipes: this message comes from your recipe controller', error)
    }
}

//creat put and putting error handling

//create post/edit along with error handling

//create delete along with error handling 

export {
    getAllRecipes,
    getRecipeByUser,
    getSingleRecipe
}