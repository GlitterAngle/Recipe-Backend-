import Recipe from '../models/recipeModels.js'

//create get for all recipes and putting error handling 
const getAllRecipes = async (req,res) =>{
    try{ 
      const allRecipes =  await Recipe.find({})
      return res.status(200).json({
        allRecipes
      })
    } catch (error) {
        console.error('Error fetching all recipes: this message comes from your recipe controller', error)
        res.status(500).json({
            message: 'Error fetching all recipes'
        })
    }
}

// create get for single recipe and errror handle
const getSingleRecipe = async (req, res)=>{
    try {
        const id = req.params.id
        const singleRecipe = await Recipe.findOne({_id: id})
        if(!singleRecipe){
            return res.status(404).json({message: 'Recipe not found'})
        }
        res.status(200).json({
            singleRecipe
        })
    } catch (error) {
        console.error('Error fetching recipe', error)
        res.status(500).json({
            message: 'Error fetching recipe: this message comse from your recipe controller'
        })
    }
}

// create get for all of a users recipes and error handle
const getRecipeByUser = async (req, res)=>{
    try {
        //this will retur all recipes by that user findOne will bring only one recipe. and the populate user will allow me to put in the user name 
        const userId = req.params.user
        const allUserRecipes = await Recipe.find({user: userId}).populate('user')
        res.status(200).json({allUserRecipes})
    } catch (error) {
        console.error('Error fetching all of users recipes: this message comes from your recipe controller', error)
        res.status(404).json({
            messgage: 'Error fetching all recipes of a user:'
        })
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