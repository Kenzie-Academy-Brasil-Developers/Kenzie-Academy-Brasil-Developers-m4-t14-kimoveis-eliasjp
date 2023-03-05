import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { updateSchemaReturn } from "../../schemas/users.schema"

export async function updateUserService (request: any){
    if (!request.admin && request.id !== Number(request.params.id)){
        throw new AppError("Insufficient permission", 403)
    }
    const userRepo = AppDataSource.getRepository(User)

    // const updateReturn = await userRepo.createQueryBuilder().update(User).set({ ...request.foundUser , ...request.body }).where("users.id = :id", { id: request.params.id }).returning("*").execute()
    const updateReturn = await userRepo.save({ ...request.foundUser , ...request.body })

    const parsedReturn = updateSchemaReturn.parse(updateReturn)

    return parsedReturn
}