import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export async function userExists (request: Request, response: Response, next: NextFunction): Promise<void>{
    const userRepo = AppDataSource.getRepository(User)

    const findUser = await userRepo.findOneBy({ id: Number(request.params.id) })
    
    if (!findUser){
        throw new AppError("User not found", 404)
    }
    
    request.foundUser = findUser

    return next()
}