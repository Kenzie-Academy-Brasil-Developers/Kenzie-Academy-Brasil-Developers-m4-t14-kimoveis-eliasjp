import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { realEstateSchemaReturn } from "../../schemas/realEstate.schema"

export async function readRealEstateService (request: any){
    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    const realEstateList = await realEstateRepo.createQueryBuilder("re")
    .leftJoinAndSelect("re.address", "address")
    .getMany()

    return realEstateList
}