import { Router } from "express";
import { EmployeeController } from "../controllers/EmployeeController.js";

const employeeRouter = Router()

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
employeeRouter.post('/employee', EmployeeController.createEmployee);


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
employeeRouter.post('/employee/:id', EmployeeController.updateEmployee);


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
employeeRouter.post('/employee/status/:id', EmployeeController.updateEmployeeStatus);

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
employeeRouter.get("/employee/:id", EmployeeController.getEmployeeById)

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
employeeRouter.get("/employee", EmployeeController.getEmployees)


export default employeeRouter

