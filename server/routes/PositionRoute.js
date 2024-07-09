import { Router } from "express";
import { PositionController } from "../controllers/PositionController.js";

const positionRouter = Router()

/**
 * @swagger
 * /position:
 *   post:
 *     summary: Creates an Position
 *     tags: [Position]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Position'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: Position successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
positionRouter.post('/position', PositionController.createPosition);



/**
 * @swagger
 * /position/{id}:
 *   get:
 *     summary: Get an Position
 *     tags: [Position]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Position'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Position
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Position'
 *            
 *          
 */
positionRouter.get("/position/:id", PositionController.getPositionById)

/**
 * @swagger
 * /position:
 *   get:
 *     summary: Get all Positions
 *     tags: [Position]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Position'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Position
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Position'
 *            
 *          
 */
positionRouter.get("/position", PositionController.getPositions)


export default positionRouter

