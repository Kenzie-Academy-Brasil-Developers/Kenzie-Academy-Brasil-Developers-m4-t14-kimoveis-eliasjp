import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"


export async function softDeleteUserService (request: any): Promise<void>{
    const userRepo = AppDataSource.getRepository(User)
    if (request.foundUser.admin){
        throw new AppError("Insufficient permission", 403)
    }
    await userRepo.delete(request.foundUser)

    return
}