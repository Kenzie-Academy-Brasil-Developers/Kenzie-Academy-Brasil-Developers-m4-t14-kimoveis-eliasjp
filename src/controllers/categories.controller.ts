import { Request, Response } from "express"
import { createCategoriesService } from "../services/categories/createCategories.service"

export async function createCategoriesController (request: Request, response: Response): Promise<Response>{
    const serviceResult = await createCategoriesService(request)

    return response.status(201).json(serviceResult)
}