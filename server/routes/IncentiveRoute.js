import { Router } from "express";
import { IncentiveController } from "../controllers/IncentitveController.js";

const incentiveRouter = Router()

/**
 * @swagger
 * /incentive:
 *   post:
 *     summary: Creates a Incentive
 *     tags: [Incentive]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Incentive'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: Incentive successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *            
 *          
 */
incentiveRouter.post('/', IncentiveController.createIncentive);



/**
 * @swagger
 * /incentive/{id}:
 *   get:
 *     summary: Get an Incentive
 *     tags: [Incentive]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Incentive'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Incentive
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Incentive'
 *            
 *          
 */
incentiveRouter.get("/:id", IncentiveController.getIncentiveById)

/**
 * @swagger
 * /incentive:
 *   get:
 *     summary: Get all Incentives
 *     tags: [Incentive]
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Incentive'
 *                 
 *     responses:
 *       400:
 *          description: bad request
 *       500:
 *          description: internal server error
 *       200:
 *         description: returns aan Incentive
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Incentive'
 *            
 *          
 */
incentiveRouter.get("/", IncentiveController.getIncentives)


export default incentiveRouter

