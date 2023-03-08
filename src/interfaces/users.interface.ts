import { z } from "zod"
import { Schedule } from "../entities"
import { createUserReturnSchema, createUserSchema, fullUserSchema } from "../schemas/users.schema"
import { DeepPartial } from "typeorm"

export type ICreateUser = z.infer<typeof createUserSchema>

export type ICreateUserReturn = z.infer<typeof createUserReturnSchema>

export type IUserInfo = z.infer<typeof fullUserSchema>