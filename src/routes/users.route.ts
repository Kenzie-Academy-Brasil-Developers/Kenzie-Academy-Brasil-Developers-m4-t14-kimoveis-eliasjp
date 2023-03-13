import { Router } from "express"
import { createUserController, readUserController, softDeleteUserController, updateUserController } from "../controllers/users.controller"
import { checkAdmin } from "../middlewares/checkAdmin.middleware"
import { checkToken } from "../middlewares/checkToken.middleware"
import { mustBeAdmin } from "../middlewares/mustBeAdmin.middleware"
import { userExists } from "../middlewares/userExists.middleware"
import { verifySchema } from "../middlewares/verifySchema.middleware"
import { createUserSchema, updateUserSchema } from "../schemas/users.schema"

export const usersRoutes: Router = Router()

usersRoutes.post("", verifySchema(createUserSchema), createUserController)
usersRoutes.get("", checkToken, checkAdmin, readUserController)
usersRoutes.patch("/:id", checkToken, userExists, mustBeAdmin, verifySchema(updateUserSchema), updateUserController)
usersRoutes.delete("/:id", checkToken, userExists, softDeleteUserController)