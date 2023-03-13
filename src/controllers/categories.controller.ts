import { Request, Response } from "express"
import { ICategoryReadAll, ICategoryReturn } from "../interfaces/category.interface"
import { createCategoriesService } from "../services/categories/createCategories.service"
import { readAllCategoriesService } from "../services/categories/readAllCategories.service"
import { readByIdCategoriesService } from "../services/categories/readByIdCategories.service"

export async function createCategoriesController (request: Request, response: Response): Promise<Response>{
    const serviceResult: ICategoryReturn = await createCategoriesService(request)

    return response.status(201).json(serviceResult)
}

export async function readAllCategoriesController (request: Request, response: Response): Promise<Response>{
    const serviceResult: ICategoryReturn[] = await readAllCategoriesService(request)

    return response.status(200).json(serviceResult)
}

export async function readByIdCategoriesController (request: Request, response: Response): Promise<Response>{
    const serviceResult: ICategoryReadAll = await readByIdCategoriesService(request)

    return response.status(200).json(serviceResult)
}