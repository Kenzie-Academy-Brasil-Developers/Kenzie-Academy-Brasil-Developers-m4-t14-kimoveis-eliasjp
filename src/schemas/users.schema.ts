import { z } from "zod"
import { hashSync } from "bcryptjs"
import { AppError } from "../errors"

export const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120).transform((pass) => hashSync(pass, 10))
})

export const fullUserSchema = createUserSchema.extend({
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()
})

export const createUserReturnSchema = fullUserSchema.omit({ password: true }).extend({ id: z.number() })

export const updateUserSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().max(45).optional(),
    password: z.string().max(120).transform((pass) => hashSync(pass, 10)).optional()
}).refine((body) => {
    if (!Object.keys(body).length){
        throw new AppError("Invalid request body.", 400)
    }
    return body
})

export const updateSchemaReturn = fullUserSchema.extend({
    id: z.number(),
}).omit({ password: true})