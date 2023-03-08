import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"

export async function readSchedulesService (request: any){
    const scheduleRepo = AppDataSource.getRepository(Schedule)
    const realEstateRepo = AppDataSource.getRepository(RealEstate)

    const findEstate = await realEstateRepo.findOneBy({ id: request.params.id })
    const realEstateList = await realEstateRepo.createQueryBuilder("re")
    .leftJoinAndSelect("re.address", "address")
    .leftJoinAndSelect("re.category", "category")
    .getOne()

    if (!findEstate){
        throw new AppError("RealEstate not found", 404)
    }

    const scheduleList = await scheduleRepo.createQueryBuilder("sc")
    .where("sc.realEstate = :id", { id: request.params.id })
    .leftJoinAndSelect("sc.user", "user")
    .getMany()

    const responseReturn = {
        ...realEstateList,
        schedules: scheduleList
    }

    return responseReturn
}