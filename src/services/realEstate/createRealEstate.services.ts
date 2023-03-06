import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { omitEstateAddressCategory } from "../../schemas/realEstate.schema"

export async function createRealEstateService (request: any){
    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    const addressRepo = AppDataSource.getRepository(Address)
    const categoryRepo = AppDataSource.getRepository(Category)

    console.log(request.body)
    const { address, categoryId, ...restObject } = request.body

    const findAddress = await addressRepo.findOneBy({ ...address })
    console.log(findAddress)
    if (findAddress){
        throw new AppError("Address already exists", 409)
    }
    
    // const responseRealEstate = await realEstateRepo.save(request.body)
    // omitEstateAddressCategory.parse(responseRealEstate)


    // const responseAddress = await addressRepo.save(address)

    // const getCategory = await categoryRepo.findOneBy({ id: categoryId })
    // responseRealEstate.category = getCategory
    
    // if (address.number){
    //     responseRealEstate.address = responseAddress
    // }

    // return responseRealEstate
}