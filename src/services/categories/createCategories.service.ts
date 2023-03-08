import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"

export async function createCategoriesService (request: any){
    const categoryRepo = AppDataSource.getRepository(Category)

    const findCategory = await categoryRepo.findOneBy({ name: request.body.name })
    if (findCategory){
        throw new AppError("Category already exists", 409)
    }

    const creation = await categoryRepo.save(request.body)

    return creation
}