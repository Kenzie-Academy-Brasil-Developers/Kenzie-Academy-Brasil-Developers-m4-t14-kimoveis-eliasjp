import { NextFunction, Request, Response } from "express"
import { decode, verify } from "jsonwebtoken"
import { AppError } from "../errors"
import "dotenv/config"

export function checkToken (request: Request, response: Response, next: NextFunction){
    const tokenString: string | undefined = request.headers.authorization?.split(" ")[1]
    if (!tokenString){
        throw new AppError("Missing bearer token", 401)
    }

    request.token = tokenString

    verify(request.token, String(process.env.SECRET_KEY), (error: any) => {
        if (error){
            throw new AppError(error.message, 401)
        }
    })

    const tokenDecoded = decode(request.token, { json: true })

    request.admin = tokenDecoded!.admin
    request.id = Number(tokenDecoded!.sub)

    return next()
}