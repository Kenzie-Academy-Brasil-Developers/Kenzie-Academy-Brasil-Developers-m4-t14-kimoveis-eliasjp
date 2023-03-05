import { IUserInfo } from "../../interfaces/users.interface"

declare global {
    namespace Express {
        interface Request {
            token: string,
            admin: boolean,
            id: number
            foundUser: IUserInfo
        }
    }
}