import User from "../models/userModels.js";


//get user by their id might comeback and make it their email idk yet
const getUserById = async (req, res)=>{
    
    try {
        const id = req.params.id
        const userProfile = await User.findById(id)
        return res.status(200).json({
            userProfile                
        })   
    } catch (error) {
        console.error('Error in retreiving user: this error comes from your userController')
        res.status(500).json({
            message: 'Error retriving user information'
        })
    }
}

//create a new user
const createUser = async (req,res)=>{
    try {
        const userPaylod = req.body
        const newUser = await User.create(userPaylod)
        res.status(200).json({
            newUser
        })
    } catch (error) {
        console.error('Error creating user: this errro comes from your userController')
        res.status(500).json({
            message: 'Error creating user'
        })
    }
}

export {
    getUserById,
    createUser
}