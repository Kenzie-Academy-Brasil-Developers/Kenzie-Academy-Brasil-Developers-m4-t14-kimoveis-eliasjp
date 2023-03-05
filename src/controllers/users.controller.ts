import { Request, Response } from "express"
import { ICreateUserReturn } from "../interfaces/users.interface"
import { createUserService } from "../services/users/createUser.service"
import { readUserService } from "../services/users/readUser.service"
import { softDeleteUserService } from "../services/users/softDeleteUser.service"
import { updateUserService } from "../services/users/updateUser.service"

export async function createUserController (request: Request, response: Response): Promise<Response> {
    const serviceResult: ICreateUserReturn | Response = await createUserService(request, response)

    return response.status(201).json(serviceResult)
}

export async function readUserController (request: Request, response: Response): Promise<Response> {
    const serviceResult = await readUserService(request)

    return response.status(200).json(serviceResult)
}

export async function updateUserController (request: Request, response: Response): Promise<Response> {
    const serviceResult = await updateUserService(request)
    console.log(serviceResult)

    return response.status(200).json({...serviceResult})
}

export async function softDeleteUserController (request: Request, response: Response): Promise<Response> {
    const serviceResult = await softDeleteUserService(request)

    return response.status(204).json(serviceResult)
}