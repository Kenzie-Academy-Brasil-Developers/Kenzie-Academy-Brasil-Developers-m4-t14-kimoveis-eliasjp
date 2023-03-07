import { z } from "zod"

export const scheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

export const scheduleSchemaReturn = scheduleSchema.extend({ id: z.number() })