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
        throw new AppError("User not found.", 404)
    }

    const checkPassword = await compare(String(request.body.password), String(findUser.password))

    if (!checkPassword){
        throw new AppError("Wrong email or password", 401)
    }

    const token = sign(
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