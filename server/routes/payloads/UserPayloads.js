/**
 * @swagger
 * components:
 *   schemas:
 *     UserLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserLoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *         user:
 *           type: User
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ForgotPassword:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         phone:
 *           type: string
 *         password:
 *           type: string
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     UserDetails:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         phone:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Access:
 *       type: array
 *       properties:
 *         accessName:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserPositions:
 *       type: array
 *       properties:
 *         position:
 *           type: UserPosition
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserPosition:
 *       type: object
 *       properties:
 *         positionId:
 *           type: string
 *         positionName:
 *           type: string
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     ChangeUserPassword:
 *       type: object
 *       properties:
 *         currentPassword:
 *           type: string
 *         password:
 *           type: string
 */

