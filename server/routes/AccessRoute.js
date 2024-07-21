import { Router } from "express";
import { AccessController } from "../controllers/AccessController.js";

const accessRouter = Router()

/**
 * @swagger
 * /access:
 *   get:
 *     summary: Get all Accesss
 *     tags: [Access]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Access'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Access
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Access'
 *            
 *          
 */
accessRouter.get("/", AccessController.getAllAccess)

accessRouter.post("/", AccessController.addPositionAccess)

export default accessRouter

