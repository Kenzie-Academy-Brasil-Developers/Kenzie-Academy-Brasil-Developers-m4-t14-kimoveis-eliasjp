import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { AppError } from "../errors";

export async function verifyAddress (request: Request, response: Response, next: NextFunction){
    const { address, categoryId, ...restObject } = request.body

    if (!address){
        return next()
    }

    const addressRepo = AppDataSource.getRepository(Address)
    const findAddress = await addressRepo.findOneBy({ ...address })
    if (findAddress){
        throw new AppError("Address already exists", 409)
    }


    return next()
}