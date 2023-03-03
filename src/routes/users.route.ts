import { Router } from "express"
import { createUserController } from "../controllers/users.controller"
import { verifySchema } from "../middlewares/verifySchema.middleware"
import { createUserSchema } from "../schemas/users.schema"

export const usersRoutes: Router = Router()

usersRoutes.post("", verifySchema(createUserSchema), createUserController)