import { z } from "zod"
import { categoriesSchemaReturn, createCategorySchema } from "../schemas/categories.schema"
import { IRealEstate } from "./realEstate.interface"

export type ICategory = z.infer<typeof createCategorySchema>

export type ICategoryReturn = z.infer<typeof categoriesSchemaReturn>

export interface ICategoryReadAll extends ICategoryReturn {
    realEstate: IRealEstate[]
}