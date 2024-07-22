import { UserService } from "../services/UserService.js";

export class UserController{
    static userService = new UserService()
    static createUser = async(req, res) => {
        try{
            await UserController.userService.createUser(req.body)
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
      
      static login = async (req, res) => {
        try{
            const {email, password } = req.body
           const userDetails = await UserController.userService.login(email, password)
            res.json({
               userDetails
            })
        }
        catch(err){
            res.status(500).json({
                message: err.message
            })
        }
      };
      
      static getUserById = async (req, res) => {
        try{
            const user = await UserController.userService.getUserById(req.params.id)
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

      static getUsers = async(req, res) =>{
        try{
            const users = await UserController.userService.getUser(req)
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
      
}