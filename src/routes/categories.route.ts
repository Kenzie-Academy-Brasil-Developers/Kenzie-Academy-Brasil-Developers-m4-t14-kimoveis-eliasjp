import { Router } from "express"
import { createCategoriesController, readAllCategoriesController, readByIdCategoriesController } from "../controllers/categories.controller"
import { checkAdmin } from "../middlewares/checkAdmin.middleware"
import { checkToken } from "../middlewares/checkToken.middleware"
import { verifySchema } from "../middlewares/verifySchema.middleware"
import { createCategorySchema } from "../schemas/categories.schema"

export const categoriesRoutes: Router = Router()

categoriesRoutes.post("", checkToken, checkAdmin, verifySchema(createCategorySchema) ,createCategoriesController)
categoriesRoutes.get("", readAllCategoriesController)
categoriesRoutes.get("/:id/realEstate", readByIdCategoriesController)