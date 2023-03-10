import { Request, Response } from "express"
import { loginService } from "../services/login/login.service"

export async function loginController (request: Request, response: Response) {
    const serviceResult = await loginService(request)

    return response.status(200).json({ token: serviceResult })
}