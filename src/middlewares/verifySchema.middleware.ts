import { NextFunction, Request, Response } from "express";


export function verifySchema (schema: any){
    return function (request: Request, response: Response, next: NextFunction){
        request.body = schema.parse(request.body)

        return next()
    }
}