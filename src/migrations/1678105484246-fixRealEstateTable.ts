import { MigrationInterface, QueryRunner } from "typeorm";

export class fixRealEstateTable1678105484246 implements MigrationInterface {
    name = 'fixRealEstateTable1678105484246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" SET NOT NULL`);
    }

}
