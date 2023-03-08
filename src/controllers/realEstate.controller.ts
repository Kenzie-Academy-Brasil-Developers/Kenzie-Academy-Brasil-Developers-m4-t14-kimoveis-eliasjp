import { Request, Response } from "express"
import { createRealEstateService } from "../services/realEstate/createRealEstate.services"
import { readRealEstateService } from "../services/realEstate/readRealEstate.services"

export async function createRealEstateController (request: Request, response: Response): Promise<Response>{
    const serviceResult = await createRealEstateService(request)

    return response.status(201).json(serviceResult)
}

export async function readRealEstateController (request: Request, response: Response): Promise<Response>{
    const serviceResult = await readRealEstateService(request)

    return response.status(200).json(serviceResult)
}