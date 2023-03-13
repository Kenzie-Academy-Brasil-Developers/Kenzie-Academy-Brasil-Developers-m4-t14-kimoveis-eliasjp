import { z } from "zod"
import { addressSchema, addressSchemaReturn } from "../schemas/address.schema"

export type IAddress = z.infer<typeof addressSchema>

export type IAddressReturn = z.infer<typeof addressSchemaReturn>