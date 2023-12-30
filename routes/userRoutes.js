import {Router} from 'express'
import { getUserById, createUser, getAllUsers, login} from '../controllers/userController.js'
import { isLoggedIn } from '../controllers/middleware.js';

const router = Router()

//get your user by id
router.get ('/', isLoggedIn, getAllUsers)

router.get('/:id', isLoggedIn, getUserById)

router.post('/login', login)

router.post('/', createUser)

//tbd 
// router.delete('/:entryIdx', deleteEntry)

// // this is to export to the main js file 

export default router