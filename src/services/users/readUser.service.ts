import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { ICreateUserReturn } from "../../interfaces/users.interface"

export async function readUserService (request: any){
    const userRepo = AppDataSource.getRepository(User)
    const allUser: ICreateUserReturn[] = await userRepo.find({ select: ["id", "name", "email", "admin", "createdAt", "updatedAt", "deletedAt"] })

    return allUser
}