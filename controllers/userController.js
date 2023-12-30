import 'dotenv/config.js'
import User from "../models/userModels.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const {SECRET = "secret"} = process.env

//get user by their id might comeback and make it their email idk yet
const getAllUsers = async (req, res)=>{
    try {
        const allUsers = await User.find({})
        res.status(200).json({
            allUsers
        })
    } catch (error) {
        console.error('Error in retreiving all users: this error comes from your userController')
        res.status(500).json({
            message: 'Error retriving all user information'
        })
    }
}

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
        //hash password
        req.body.password = await bcrypt.hash(req.body.password, 10)
        //create new user
        const newUser = await User.create(req.body)
        res.status(200).json({
            newUser
        })
    } catch (error) {
        console.error('Error creating user: this error comes from your userController', error.message)
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        })
    }
}

//login route to verify a user and get a toke
const login = async(req, res)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(user){
            const result = await bcrypt.compare(req.body.password, user.password)
            if(result){
                const token = jwt.sign({username: user.username}, SECRET)
                res.json({token})
            } else {
                res.status(400).json({
                    error: "password doesn't match"
                })
            }
        }else{
            res.status(400).json({
                error: `User doesn't exist`
            })
        }
    } catch (error) {
        res.status(400).json({
            error: "this is where you're getting an error"
        })
    }
}

export {
    getUserById,
    createUser,
    getAllUsers,
    login
}