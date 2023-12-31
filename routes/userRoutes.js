import {Router} from 'express'
import { getUserById, createUser, getAllUsers} from '../controllers/userController.js'

const router = Router()

//get your user by id
router.get ('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', createUser)

//tbd 
// router.delete('/:entryIdx', deleteEntry)

// // this is to export to the main js file 

export default router