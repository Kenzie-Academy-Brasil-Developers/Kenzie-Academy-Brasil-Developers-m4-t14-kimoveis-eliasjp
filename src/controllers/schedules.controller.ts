import { Request, Response } from "express"
import { createScheduleService } from "../services/schedules/createSchedule.service"

export async function createScheduleController (request: Request, response: Response): Promise<Response>{
    const serviceResult = await createScheduleService(request)

    return response.status(201).json(serviceResult)
}