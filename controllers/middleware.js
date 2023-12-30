import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

//middleware for authorization (making sure they are loggied in)

const isLoggedIn = async (req, res, next) =>{
    try {
        if(req.cookies.token){
            const token = req.cookies.token
            if(token){
                const payload = await jwt.verify(token, process.env.SECRET)
                if(payload){
                    req.user = payload
                    console.log(req.user)
                    next()
                }else{
                    res.status(400).json({ error: 'token verification failed'})
                }
            }else{
                res.status(400).json({error: 'malformed auth header'})
            }
        }else{
            res.status(400).json({error: 'no authoriazation header'})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
//     try {
//         //check if auth header exists
//         if(req.headers.authorization){
//             const authHeader = req.headers.authorization
//             //parse token from header
//             const token = authHeader.split(" ")[1]//split the header and get the token

//             console.log("received token:", token)

//             if(token){

//                 console.log("secret used for verification:", process.env.SECRET)

//                 const payload = jwt.verify(token, process.env.SECRET)
//                 if(payload){
//                     //store user data in request object
//                     req.user = payload
//                     next()
//                 }else{
//                     res.status(400).json({ error: 'token verification failed'})
//                 }
//             }else{
//                 res.status(400).json({error: 'malformed auth header'})
//             }
//         }else{
//             res.status(400).json({error: 'No authorization header'})
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
}

export {isLoggedIn}