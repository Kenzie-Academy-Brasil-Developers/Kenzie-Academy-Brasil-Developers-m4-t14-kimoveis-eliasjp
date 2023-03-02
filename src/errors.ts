import { Request, Response, NextFunction } from "express"

export class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number = 400){
        super(message)
        this.statusCode = statusCode
    }
}

export function handleErrors (error: any, request: Request, response: Response, _: NextFunction){
    if (error instanceof AppError){
        return response.status(error.statusCode).json({ message: error.message })
    }
    
    console.log(error)
    return response.status(500).json({ message: "Internal server error" })
}