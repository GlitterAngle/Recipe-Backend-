import {Router} from 'express'
import { getAllRecipes,
    getRecipeByUser,
    getSingleRecipe,
    createOneRecipe,
    editRecipe,
    removeRecipe} from '../controllers/recipeController.js'

const router = Router()

// //get your controllers and tell them what they are get put post delete
router.get('/', getAllRecipes)

router.get('/user/:userId', getRecipeByUser)

router.get('/:id', getSingleRecipe)

// router.post('/new', newEntry)
router.post('/', createOneRecipe)

// router.put('/:entryIdx', updateEntry)
router.put('/:id', editRecipe)

// router.delete('/:entryIdx', deleteEntry)
router.delete('/:id', removeRecipe)
// // this is to export to the main js file 

// export default router