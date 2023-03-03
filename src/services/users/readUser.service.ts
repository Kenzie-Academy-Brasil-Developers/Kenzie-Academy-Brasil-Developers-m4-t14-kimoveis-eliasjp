import { AppDataSource } from "../../data-source"
import { User } from "../../entities"

export async function readUserService (request: any){
    const userRepo = AppDataSource.getRepository(User)
    const allUser = await userRepo.findAndCount({ select: ["id", "name", "email", "admin", "createAt", "updateAt", "deleteAt"] })

    return allUser
}