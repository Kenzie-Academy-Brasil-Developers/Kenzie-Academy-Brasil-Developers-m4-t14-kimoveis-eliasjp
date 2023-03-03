import { Router } from "express"
import { createUserController, readUserController } from "../controllers/users.controller"
import { checkAdmin } from "../middlewares/checkAdmin.middleware"
import { verifySchema } from "../middlewares/verifySchema.middleware"
import { createUserSchema } from "../schemas/users.schema"

export const usersRoutes: Router = Router()

usersRoutes.post("", verifySchema(createUserSchema), createUserController)
usersRoutes.get("", checkAdmin, readUserController)