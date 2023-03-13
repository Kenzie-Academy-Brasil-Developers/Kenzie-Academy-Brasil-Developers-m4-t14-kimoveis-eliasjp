import { z } from "zod"
import { realEstateSchema, omitEstateAddressCategory, realEstateSchemaReturn } from "../schemas/realEstate.schema"

export type IRealEstate = z.infer<typeof realEstateSchema>

export type IRealEstateOmit = z.infer<typeof omitEstateAddressCategory>

export type IRealEstateReturn = z.infer<typeof realEstateSchemaReturn>