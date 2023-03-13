import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { ICreateUserReturn, IUserInfo } from "../../interfaces/users.interface"
import { updateSchemaReturn } from "../../schemas/users.schema"

export async function updateUserService (request: any){
    if (!request.admin && request.id !== Number(request.params.id)){
        throw new AppError("Insufficient permission", 403)
    }
    const userRepo = AppDataSource.getRepository(User)

    const updateReturn: IUserInfo | null = await userRepo.save({ ...request.foundUser , ...request.body })

    const parsedReturn: ICreateUserReturn = updateSchemaReturn.parse(updateReturn)

    return parsedReturn
}