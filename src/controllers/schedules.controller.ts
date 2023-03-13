import { Request, Response } from "express"
import { createScheduleService } from "../services/schedules/createSchedule.service"
import { readSchedulesService } from "../services/schedules/readSchedules.service"

export async function createScheduleController (request: Request, response: Response): Promise<Response>{
    const serviceResult: { message: string } = await createScheduleService(request)

    return response.status(201).json(serviceResult)
}

export async function readSchedulesController (request: Request, response: Response): Promise<Response>{
    const serviceResult = await readSchedulesService(request)

    return response.status(200).json(serviceResult)
}