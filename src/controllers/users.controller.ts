import { Request, Response } from "express"
import { ICreateUserReturn } from "../interfaces/users.interface"
import { createUserService } from "../services/users/createUser.service"

export async function createUserController (request: Request, response: Response): Promise<Response> {
    const serviceResult: ICreateUserReturn | Response = await createUserService(request, response)

    return response.status(201).json(serviceResult)
}
