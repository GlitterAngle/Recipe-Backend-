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
const createOneRecipe = async (req, res)=>{
    try {
        const userId = req.params.user
        const recipePayload = req.body
        //the whole set of items i want my recipe to contain will be in the curly brackets like the above does with user: userId but since this is holding more information it will also have the payload in the currly brackets the tripple dots makes sure to spread this information through your whole Recipe model
        const newRecipe = await Recipe.create({...recipePayload,user: userId})
        res.status(200).json({newRecipe})
    } catch (error) {
        console.error('Error creating new recipe post: this message comes from your recipe controller', error)
        res.status(404).json({
            message: 'Error creating new recipe post'
        })
    }
}

//create post/edit by id along with error handling
const editRecipe = async (req, res)=>{
    try {
        const id = req.params.id
        const editPayload = req.body
        //new: true is uesed to find the recipe by its ID and update if with the new data and ensures the return of the updated document. 
        const recipeToEdit = await Recipe.findByIdAndUpdate(id,editPayload,{new: true})
        res.status(200).json({recipeToEdit})
    } catch (error) {
        console.error('Error editing your recipe: this message comes from your edit recipe')
        res.status(500).json({
            message: 'Error editing your recipe'
        })
        
    }
}

//create delete by ID along with error handling 
const removeRecipe = async (req, res)=>{
    try {
        const id = req.params.id
        const remove = await Recipe.findByIdAndDelete(id)
        res.status(200).json({remove})
    } catch (error) {
        console.error('Error removing your recipe: this message comes from your remove recipe')
        res.status(500).json({
            message: 'Error removing your recipe'
        })
    }
}

export {
    getAllRecipes,
    getRecipeByUser,
    getSingleRecipe,
    createOneRecipe,
    editRecipe,
    removeRecipe
}