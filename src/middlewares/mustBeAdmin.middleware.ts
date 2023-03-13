import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

export function mustBeAdmin (request: Request, response: Response, next: NextFunction) {
    if (!request.admin && request.id !== Number(request.params.id)){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}