import { Router } from "express";
import { EmployeeController } from "../controllers/EmployeeController.js";
import { Upload } from "../middlewares/File.js";
import { UserService } from "../services/UserService.js";
import { EmployeeService } from "../services/EmployeeService.js";

const employeeRouter = Router()

const userService = new UserService()
const employeeService = new EmployeeService()
userService.setEmployeeService(employeeService)
employeeService.setUserService(userService)
const employeeController = new EmployeeController(userService, employeeService)

/**
 * @swagger
 * /employee:
 *   post:
 *     summary: Creates an employee
 *     tags: [Employee]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Employee'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       201:
 *         description: employee successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
employeeRouter.post('/', Upload.single("profilePicture"), employeeController.createEmployee);


/**
 * @swagger
 * /employee:
 *   put:
 *     summary: Updates an employee
 *     tags: [Employee]
 *     requestBody:
 *        content:
 *          application/json:
 *           - in: path
 *             name: id
 *             schema:
 *                 $ref: '#/components/schemas/Employee'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: employee successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
employeeRouter.put('/:id', employeeController.updateEmployee);


/**
 * @swagger
 * /employee/status:
 *   patch:
 *     summary: Updates employee status
 *     tags: [Employee]
 *     requestBody:
 *        content:
 *          application/json:
 *           - in: path
 *             name: id
 *             schema:
 *                 $ref: '#/components/schemas/EmployeeStatus'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       201:
 *         description: employee status successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
employeeRouter.patch('/status/:id', employeeController.updateEmployeeStatus);

/**
 * @swagger
 * /employee/{id}:
 *   get:
 *     summary: Get an employee
 *     tags: [Employee]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Employee'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan employee
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *            
 *          
 */
employeeRouter.get("/:id", employeeController.getEmployeeById)

/**
 * @swagger
 * /employee:
 *   get:
 *     summary: Get all employees
 *     tags: [Employee]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Employee'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan employee
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *            
 *          
 */
employeeRouter.get("/", employeeController.getEmployees)
/**
 * @swagger
 * /employee/{id}/uploadProfilePicture:
 *   patch:
 *     summary: Updates employee profile picture
 *     tags: [Employee]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/EmployeeProfilePicture'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       201:
 *         description: employee profile picture successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
employeeRouter.patch("/:id/uploadProfilePicture", Upload.single("profilePicture"), employeeController.uploadEmployeeProfilePicture)



export default employeeRouter

