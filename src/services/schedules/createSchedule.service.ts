import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"

export async function createScheduleService(request: any){
    const scheduleRepo = AppDataSource.getRepository(Schedule)
    const realEstateRepo = AppDataSource.getRepository(RealEstate)

    const findRealEstate = await realEstateRepo.createQueryBuilder("sc")
    .where(`sc.id = :id`, { id: request.body.realEstateId })
    .getOne()

    if (!findRealEstate){
        throw new AppError("RealEstate not found", 404)
    }
    
    const findUserSchedule = await scheduleRepo.createQueryBuilder("sc")
    .where(`sc.hour = :hour`, { hour: request.body.hour })
    .where(`sc.date = :date`, { date: request.body.date })
    .where(`sc.userId = :username`, { username: request.id })
    .getOne()

    if (findUserSchedule){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    const findDateAndHour = await scheduleRepo.createQueryBuilder("sc")
    .where(`sc.hour = :hour`, { hour: request.body.hour })
    .where(`sc.date = :date`, { date: request.body.date })
    .getOne()

    if (findDateAndHour){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const [year, day, month] = request.body.date.split("/")
    const checkDay = new Date(year, month - 1, day).getDay()
    if (checkDay < 1 || checkDay > 5){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }

    const [hour, minute] = request.body.hour.split(":")
    if (Number(hour) < 8 || Number(hour) > 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    await scheduleRepo.save(request.body)

    return { message: "Schedule created" }
}