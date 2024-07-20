import { Router } from "express";
import { TaxController } from "../controllers/TaxController.js";

const taxRouter = Router()

/**
 * @swagger
 * /tax:
 *   post:
 *     summary: Creates a Tax
 *     tags: [Tax]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Tax'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: Tax successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
taxRouter.post('/', TaxController.createTax);



/**
 * @swagger
 * /tax/{id}:
 *   get:
 *     summary: Get an Tax
 *     tags: [Tax]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Tax'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Tax
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Tax'
 *            
 *          
 */
taxRouter.get("/:id", TaxController.getTaxById)

/**
 * @swagger
 * /tax:
 *   get:
 *     summary: Get all Taxs
 *     tags: [Tax]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Tax'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Tax
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tax'
 *            
 *          
 */
taxRouter.get("/", TaxController.getTaxs)


export default taxRouter

