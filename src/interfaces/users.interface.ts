import { z } from "zod"
import { createUserReturnSchema, createUserSchema } from "../schemas/users.schema"

export type ICreateUser = z.infer<typeof createUserSchema>

export type ICreateUserReturn = z.infer<typeof createUserReturnSchema>