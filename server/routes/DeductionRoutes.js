import { Router } from "express";
import { DeductionController } from "../controllers/DeductionController.js";

const deductionRouter = Router()

/**
 * @swagger
 * /deduction:
 *   post:
 *     summary: Creates a Deduction
 *     tags: [Deduction]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/deduction'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: Deduction successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
deductionRouter.post('/', DeductionController.createDeduction);



/**
 * @swagger
 * /deduction/{id}:
 *   get:
 *     summary: Get an Deduction
 *     tags: [Deduction]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/deduction'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Deduction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/deduction'
 *            
 *          
 */
deductionRouter.get("/:id", DeductionController.getDeductionById)

/**
 * @swagger
 * /deduction:
 *   get:
 *     summary: Get all Deductions
 *     tags: [Deduction]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/deduction'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Deduction
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/deduction'
 *            
 *          
 */
deductionRouter.get("/", DeductionController.getDeductions)


export default deductionRouter

