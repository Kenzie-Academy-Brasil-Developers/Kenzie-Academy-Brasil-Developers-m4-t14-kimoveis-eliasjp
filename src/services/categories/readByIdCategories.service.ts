import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"

export async function readByIdCategoriesService (request: any){
    const categoryRepo = AppDataSource.getRepository(Category)
    const realEstateRepo = AppDataSource.getRepository(RealEstate)

    const checkCategoryExistance = await categoryRepo.findOneBy({ id: request.params.id })
    if (!checkCategoryExistance){
        throw new AppError("Category not found", 404)
    }

    const realEstateConfig = ["id", "size", "sold", "value", "createdAt", "updatedAt"]

    const allRealEstateWithCategory = await realEstateRepo.createQueryBuilder("re").where("re.categoryId = :id", { id: request.params.id}).select(realEstateConfig).execute()
    const results = {
        ...checkCategoryExistance,
        RealEstate: allRealEstateWithCategory
    }

    return results
}