import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { ICategoryReturn } from "../../interfaces/category.interface"

export async function readAllCategoriesService (request: any){
    const categoryRepo = AppDataSource.getRepository(Category)
    const categories: ICategoryReturn[] = await categoryRepo.find()

    return categories
}