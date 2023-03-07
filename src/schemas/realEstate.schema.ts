import { z } from "zod"
import { addressSchema } from "./address.schema"

export const realEstateSchema = z.object({
    sold: z.boolean().default(false),
    value: z.union([z.string(), z.number()]),
    size: z.number().positive(),
    address: addressSchema,
    categoryId: z.number().positive().nullish()
})

export const omitEstateAddressCategory = realEstateSchema.omit({ address: true, categoryId: true })

export const realEstateSchemaReturn = realEstateSchema.extend({
    id: z.number()
})