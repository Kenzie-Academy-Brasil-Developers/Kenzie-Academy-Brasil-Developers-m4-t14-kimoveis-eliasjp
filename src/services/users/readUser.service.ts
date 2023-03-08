import { AppDataSource } from "../../data-source"
import { User } from "../../entities"

export async function readUserService (request: any){
    const userRepo = AppDataSource.getRepository(User)
    const allUser = await userRepo.find({ select: ["id", "name", "email", "admin", "createdAt", "updatedAt", "deletedAt"] })

    return allUser
}