import { Request, Response, NextFunction } from "express"
import { decode, JwtPayload } from "jsonwebtoken"
import { AppError } from "../errors"
import "dotenv"


export function checkAdmin (request: Request, response: Response, next: NextFunction) {
    const tokenString: string | undefined = request.headers.authorization?.split(" ")[1]
    if (!tokenString){
        throw new AppError("Missing token", 403)
    }

    const decoded = decode(tokenString, { json: true })
    if (!decoded!.admin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}