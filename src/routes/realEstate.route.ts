import { Router } from "express"
import { createRealEstateController } from "../controllers/realEstate.controller"
import { readRealEstateController } from "../controllers/realEstate.controller"
import { checkAdmin } from "../middlewares/checkAdmin.middleware"
import { checkToken } from "../middlewares/checkToken.middleware"
import { verifySchema } from "../middlewares/verifySchema.middleware"
import { realEstateSchema } from "../schemas/realEstate.schema"

export const realEstateRoutes: Router = Router()

realEstateRoutes.post("", checkToken, checkAdmin, verifySchema(realEstateSchema), createRealEstateController)
realEstateRoutes.get("", readRealEstateController)