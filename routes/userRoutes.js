import {Router} from 'express'
import { getUserById, createUser, getAllUsers, login} from '../controllers/userController.js'

const router = Router()

//get your user by id
router.get ('/', getAllUsers)

router.get('/:id', getUserById)

router.get('/login', login)

router.post('/', createUser)

//tbd 
// router.delete('/:entryIdx', deleteEntry)

// // this is to export to the main js file 

export default router