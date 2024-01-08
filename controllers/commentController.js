import Comment from '../models/commentModels.js'

const getAllComments = async (req, res)=>{
    try {
        const recipeId = req.params.recipeId
        const allComments = await Comment.find({recipe: recipeId}).populate('user', 'username')
        res.status(200).json({allComments})
    } catch (error) {
        console.error('Error fetching all comments: this message comes from your comment controller', error)
        res.status(404).json({
            message: 'Error fetching all comments'
        })
    }
}


const createComment = async (req, res)=>{
    try {

        //this gets the user id from the token
        const userId = req.user._idç
        //this getst the recipe id from the url
        const recipeId = req.params.recipeId
        //this gets the payload from the body
        const commentPayload = req.body
        //this gets the star rating from the body
        const starRating = req.body.star_rating
        //the whole set of items i want my recipe to contain will be in the curly brackets like the above does with user: userId but since this is holding more information it will also have the payload in the currly brackets the tripple dots makes sure to spread this information through your whole Recipe model
        const newComment = await Comment.create({...commentPayload,user: userId, recipe: recipeId, star_rating: starRating})
        res.status(201).json({newComment})
    } catch (error) {
        console.error('Error creating new comment comeing from your comment controller createComment function', error)
        res.status(404).json({
            message: 'Error creating new comment'
        })
    }
}


const editComment = async (req, res)=>{
    try {
        //the recipe id from the url
        const recipeId = req.params.recipeId
        //the comment id will have to be pulled from the body somehow so you can target the comment you want to edit
        const commentId = req.body.commentId
        //the payload will be the new information you want to add to the comment
        const editPayload = req.body

        //new: true is uesed to find the recipe by its ID and update if with the new data and ensures the return of the updated document. 
        const commentToEdit = await Comment.findByIdAndUpdate({_id: commentId, recipe: recipeId},editPayload,{new: true})
        res.status(200).json({commentToEdit})
    } catch (error) {
        console.error('Error editing your comment: this message comes from your edit comment')
        res.status(500).json({
            message: 'Error editing your comment'
        })
        
    }
}

const deleteComment = async (req, res)=>{
    try {
        const recipeId = req.params.recipeId
        const commentId = req.body.commentId
        const remove = await Comment.findByIdAndDelete({_id: commentId, recipe: recipeId})
        res.status(200).json({remove})
    } catch (error) {
        console.error('Error removing your comment: this message comes from your remove comment')
        res.status(500).json({
            message: 'Error removing your comment'
        })
    }
}

export {
    getAllComments,
    createComment,
    editComment,
    deleteComment
}