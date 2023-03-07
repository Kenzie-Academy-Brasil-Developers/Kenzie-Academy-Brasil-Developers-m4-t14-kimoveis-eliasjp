import { Request, Response, NextFunction } from "express"
import { decode, JwtPayload } from "jsonwebtoken"
import { AppError } from "../errors"
import "dotenv"


export function checkAdmin (request: Request, response: Response, next: NextFunction) {
    const decoded = decode(request.token, { json: true })
    if (!decoded!.admin){
        throw new AppError("Insufficient permission", 403)
    }
    
    request.admin = decoded!.admin
    request.id = decoded!.id
    return next()
}