import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { IRealEstateReturn } from "../../interfaces/realEstate.interface"

export async function readRealEstateService (request: any){
    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    const realEstateList: IRealEstateReturn[] = await realEstateRepo.createQueryBuilder("re")
    .leftJoinAndSelect("re.address", "address")
    .getMany()

    return realEstateList
}