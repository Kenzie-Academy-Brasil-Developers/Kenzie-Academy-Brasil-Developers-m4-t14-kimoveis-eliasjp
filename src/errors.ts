import { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"

class AppError extends Error {
    statusCode: number
    constructor(message: string, statusCode: number){
        super(message)
        this.statusCode = statusCode
    }
}

function handleError (error: any, request: Request, response: Response, _: NextFunction){
    console.log(`Esperando Error`)
    if (error instanceof AppError){
        return response.status(error.statusCode).json({ message: error.message })
    }
    if (error instanceof ZodError){
        return response.status(400).json({ message: error.flatten().fieldErrors })
    }
}

export { AppError, handleError }