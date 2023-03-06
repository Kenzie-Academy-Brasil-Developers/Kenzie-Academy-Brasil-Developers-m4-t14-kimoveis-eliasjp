import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors"
import { addressSchema } from "../schemas/address.schema"

export function verifyAddressSchema (request: Request, response: Response, next: NextFunction): void{
    if (!request.body.address){
        throw new AppError("Address property must exists", 400)
    }
    addressSchema.parse(request.body.address)

    return next()
}