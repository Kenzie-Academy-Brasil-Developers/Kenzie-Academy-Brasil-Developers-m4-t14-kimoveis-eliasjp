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
    console.log(`handleError called`)
    if (error instanceof AppError){
        console.log(`handleError (AppError) called`)
        return response.status(error.statusCode).json({ message: error.message })
    }
    if (error instanceof ZodError){
        console.log(`handleError (ZodError) called`)
        return response.status(400).json({ message: error.flatten().fieldErrors })
    }
    console.log(`handleError (anything else) called`)
    return response.status(500).json({ message: "Server internal error" })
}

export { AppError, handleError }