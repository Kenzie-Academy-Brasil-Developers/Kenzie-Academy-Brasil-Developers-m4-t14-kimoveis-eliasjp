import { z } from "zod"
import { scheduleSchema, scheduleSchemaReturn } from "../schemas/schedules.schema"
import { IRealEstateReturn } from "./realEstate.interface"

export type ISchedule = z.infer<typeof scheduleSchema>

export type IScheduleReturn = z.infer<typeof scheduleSchemaReturn>