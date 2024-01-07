import { Router } from 'express'
import { createComment, getAllComments, editComment, deleteComment} from '../controllers/commentController.js'
import { isLoggedIn } from '../controllers/middleware.js'

const router = Router()

router.get('/:recipeId', isLoggedIn ,getAllComments)

router.post('/:recipeId', isLoggedIn ,createComment)

router.put('/:recipeId', isLoggedIn ,editComment)

router.delete('/:recipeId', isLoggedIn ,deleteComment)


export default router