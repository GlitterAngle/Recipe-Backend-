import {Router} from 'express'
import {getAllRecipes,
    getRecipeByUser,
    getSingleRecipe} from '../controllers/recipeController.js'

const router = Router()

// //get your controllers and tell them what they are get put post delete
router.get('/', getAllRecipes)

router.get('/user/:userId', getRecipeByUser)

router.get('/:id', getSingleRecipe)

// router.post('/new', newEntry)

// router.put('/:entryIdx', updateEntry)

// router.delete('/:entryIdx', deleteEntry)

// // this is to export to the main js file 

// export default router