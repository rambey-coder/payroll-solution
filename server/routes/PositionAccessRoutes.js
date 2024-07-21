import { Router } from "express";
import { AccessController } from "../controllers/AccessController.js";

const positionAccessRouter = Router()

positionAccessRouter.post("/", AccessController.addPositionAccess)

positionAccessRouter.get("/", AccessController.getAllPermissionAccess)


export default positionAccessRouter

