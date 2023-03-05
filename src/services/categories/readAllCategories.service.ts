import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"

export async function readAllCategoriesService (request: any){
    const categoryRepo = AppDataSource.getRepository(Category)
    const categories = await categoryRepo.find()

    return categories
}