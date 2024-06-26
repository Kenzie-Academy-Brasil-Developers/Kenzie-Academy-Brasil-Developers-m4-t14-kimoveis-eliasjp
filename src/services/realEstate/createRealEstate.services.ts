import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { IAddressReturn } from "../../interfaces/address.interface"
import { ICategoryReturn } from "../../interfaces/category.interface"
import { omitEstateAddressCategory } from "../../schemas/realEstate.schema"

export async function createRealEstateService (request: any){
    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    const addressRepo = AppDataSource.getRepository(Address)
    const categoryRepo = AppDataSource.getRepository(Category)

    const { address, categoryId, ...restObject } = request.body

    const responseAddress: IAddressReturn = await addressRepo.save(address)
    const getCategory: ICategoryReturn | null = await categoryRepo.findOneBy({ id: categoryId })
    
    const responseRealEstate = await realEstateRepo.save({ ...restObject, address: responseAddress, category: getCategory })
    omitEstateAddressCategory.parse(responseRealEstate)

    responseRealEstate.category = getCategory
    
    if (address.number){
        responseRealEstate.address = responseAddress
    }

    return responseRealEstate
}