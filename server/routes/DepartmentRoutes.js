import { Router } from "express";
import { DepartmentController } from "../controllers/DepartmentController.js";

const departmentRouter = Router()

/**
 * @swagger
 * /department:
 *   post:
 *     summary: Creates a Department
 *     tags: [Department]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Department'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: Department successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
departmentRouter.post('/', DepartmentController.createDepartment);



/**
 * @swagger
 * /department/{id}:
 *   get:
 *     summary: Get an Department
 *     tags: [Department]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Department'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Department
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Department'
 *            
 *          
 */
departmentRouter.get("/:id", DepartmentController.getDepartmentById)

/**
 * @swagger
 * /department:
 *   get:
 *     summary: Get all Departments
 *     tags: [Department]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Department'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Department
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Department'
 *            
 *          
 */
departmentRouter.get("/", DepartmentController.getDepartments)


export default departmentRouter

