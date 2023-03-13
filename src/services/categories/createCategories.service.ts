import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"
import { ICategory, ICategoryReturn } from "../../interfaces/category.interface"

export async function createCategoriesService (request: any){
    const categoryRepo = AppDataSource.getRepository(Category)

    const findCategory: ICategoryReturn | null = await categoryRepo.findOneBy({ name: request.body.name })
    if (findCategory){
        throw new AppError("Category already exists", 409)
    }

    const creation: ICategoryReturn = await categoryRepo.save(request.body)

    return creation
}