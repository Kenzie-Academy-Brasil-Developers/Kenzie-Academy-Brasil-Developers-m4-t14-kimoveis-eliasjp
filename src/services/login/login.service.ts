import { compare } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import "dotenv"

export async function loginService (request: any){
    const userRepo = AppDataSource.getRepository(User)

    const findUser = await userRepo.findOneBy({ email: request.body.email })

    if (!findUser){
        throw new AppError("Invalid credentials", 401)
    }
    
    if (findUser.deletedAt){
        throw new AppError("Invalid credentials", 401)
    }

    if (findUser.password !== request.body.password){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = sign(
        {
            email: request.body.email,
            admin: findUser.admin

        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: "1h",
            subject: String(findUser.id)
        }
    )

    return token
}