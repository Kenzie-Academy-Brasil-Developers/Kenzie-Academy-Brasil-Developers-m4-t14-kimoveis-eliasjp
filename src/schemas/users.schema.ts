import { z } from "zod"
import { hashSync } from "bcryptjs"

export const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120).transform((pass) => hashSync(pass, 10))
})

export const createUserReturnSchema = createUserSchema.extend({
    createAt: z.date(),
    updateAt: z.date(),
    deleteAt: z.date().nullish()
}).omit({ password: true })