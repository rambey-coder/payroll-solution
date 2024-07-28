import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { UserService } from "../services/UserService.js";
import { EmployeeService } from "../services/EmployeeService.js";

const userRouter = Router()
const userService = new UserService()
const employeeService = new EmployeeService()
userService.setEmployeeService(employeeService)
const userController = new UserController(userService)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Returns all user token
 *     tags: [User]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/UserLogin'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: logs in a user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/UserLoginResponse'
 *            
 *          
 */
userRouter.post('/login', userController.login);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create user
 *     tags: [User]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/User'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: user created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/User'
 *            
 *          
 */
userRouter.post('/', userController.createUser);


/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true 
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/User'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns a user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/User'
 *            
 *          
 */
userRouter.get("/:id", userController.getUserById)

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *            
 *          
 */
userRouter.get("/", userController.getUsers)

/**
 * @swagger
 * /user/{id}/changeUserPassword:
 *   patch:
 *     summary: Updates user password
 *     tags: [User]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/ChangeUserPassword'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       201:
 *         description: user password updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */

userRouter.patch("/:id/changepassword", userController.changeUserPassword)

export default userRouter

