import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { ICreateUserReturn, IUserInfo } from "../../interfaces/users.interface"
import { updateSchemaReturn } from "../../schemas/users.schema"

export async function updateUserService (request: any){
    const userRepo = AppDataSource.getRepository(User)

    const updateUser = userRepo.create({ ...request.foundUser , ...request.body })

    userRepo.save(updateUser)

    const parsedReturn: ICreateUserReturn = updateSchemaReturn.parse(updateUser)

    return parsedReturn
}