import {Router} from 'express'
import { getUserById, createUser} from '../controllers/userController.js'

const router = Router()

//get your user by id
router.get('/:id', getUserById)

router.post('/:newUser', createUser)


//tbd 
// router.delete('/:entryIdx', deleteEntry)

// // this is to export to the main js file 

export default router