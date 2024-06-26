import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { ICategoryReadAll, ICategoryReturn } from "../../interfaces/category.interface"
import { IRealEstate } from "../../interfaces/realEstate.interface"

export async function readByIdCategoriesService (request: any){
    const categoryRepo = AppDataSource.getRepository(Category)
    const realEstateRepo = AppDataSource.getRepository(RealEstate)

    const checkCategoryExistance = await categoryRepo.findOneBy({ id: request.params.id })
    if (!checkCategoryExistance){
        throw new AppError("Category not found", 404)
    }

    const realEstateConfig = ["id", "size", "sold", "value", "createdAt", "updatedAt"]

    const allRealEstateWithCategory: IRealEstate[] = await realEstateRepo.createQueryBuilder("re").where("re.categoryId = :id", { id: request.params.id})
    .getMany()

    const results: ICategoryReadAll = {
        ...checkCategoryExistance,
        realEstate: allRealEstateWithCategory
    }

    return results
}