import { Router } from "express"
import { createScheduleController } from "../controllers/schedules.controller"
import { checkAdmin } from "../middlewares/checkAdmin.middleware"
import { checkToken } from "../middlewares/checkToken.middleware"
import { verifySchema } from "../middlewares/verifySchema.middleware"
import { scheduleSchema } from "../schemas/schedules.schema"

export const schedulesRoutes: Router = Router()

schedulesRoutes.post("", checkToken, verifySchema(scheduleSchema), createScheduleController)