import { Response } from "express"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserInfo } from "../../interfaces/users.interface"
import { createUserReturnSchema } from "../../schemas/users.schema"

export async function createUserService (request: any, response: Response) {
    const userRepo = AppDataSource.getRepository(User)

    const findEmail: IUserInfo | null = await userRepo.findOneBy({ email: request.body.email })
    
    if (findEmail){
        return response.status(409).json({ message: "Email already exists"})
    }

    const createUser = userRepo.create(request.body)
    const dataUser: IUserInfo[] = await userRepo.save(createUser)

    return createUserReturnSchema.parse(dataUser)
}