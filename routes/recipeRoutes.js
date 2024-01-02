import {Router} from 'express'
import { isLoggedIn } from '../controllers/middleware.js'
import { getAllRecipes,
    getRecipeByUser,
    getSingleRecipe,
    createOneRecipe,
    editRecipe,
    removeRecipe} from '../controllers/recipeController.js'

const router = Router()

// //get your controllers and tell them what they are get put post delete
router.get('/', isLoggedIn, getAllRecipes) //this works

router.get('/:id', getSingleRecipe)

router.get('/user/:id', isLoggedIn, getRecipeByUser) //this works

// router.post('/new', newEntry)
router.post('/:id', createOneRecipe) //this works

// router.put('/:entryIdx', updateEntry)
router.put('/:id', isLoggedIn, editRecipe) //this works

// router.delete('/:entryIdx', deleteEntry)
router.delete('/:id', isLoggedIn, removeRecipe) //this works 
// // this is to export to the main js file 

// export default router
export default router