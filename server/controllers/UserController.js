import { AuthException } from "../exceptions/AuthException.js";
import { UserService } from "../services/UserService.js";


export class UserController{
    constructor(userService){
        this.userService = userService
    }
    createUser = async(req, res) => {
        try{
            await this.userService.createUser(req.body)
             return res.json({
                message: "User created"
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };
      
      login = async (req, res) => {
        try{
            const {email, password } = req.body
           const userDetails = await this.userService.login(email, password)
            return res.json({
               userDetails
            })
        }
        catch(err){
            if(err instanceof AuthException){
                res.status(err.statusCode).json({
                    message: err.message
                })
            }
            res.status(500).json({
                message: err.message
            })
        }
      };
      
      getUserById = async (req, res) => {
        try{
            const user = await this.userService.getUserById(req.params.id)
            res.json({
                data: user
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };

      getUsers = async(req, res) =>{
        try{
            const users = await this.userService.getUser(req)
            res.json({
                data: users
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      }
      
      changeUserPassword = async(req, res) =>{
        try{
            await this.userService.changeUserPassword(req)
            return res.json({
                message: "user password changed"
            })
        }
        catch(err){
            res.status(err.statusCode || 500).json({
                message: err.message || "Internal Server Error"
            })
        }
      }
}