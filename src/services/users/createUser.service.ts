import { Response } from "express"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { createUserReturnSchema } from "../../schemas/users.schema"

export async function createUserService (request: any) {
    const userRepo = AppDataSource.getRepository(User)

    const findEmail = await userRepo.findOneBy({ email: request.body.email })
    
    if (findEmail){
        throw new AppError("Email already exists", 409)
    }

    const createUser = userRepo.create(request.body)
    const dataUser = await userRepo.save(createUser)

    return createUserReturnSchema.parse(dataUser)
}