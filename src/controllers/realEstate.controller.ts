import { Request, Response } from "express"
import { createRealEstateService } from "../services/realEstate/createRealEstate.services"

export async function createRealEstateController (request: Request, response: Response): Promise<Response>{
    const serviceResult = await createRealEstateService(request)

    return response.status(201).json(serviceResult)
}