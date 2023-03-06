import { MigrationInterface, QueryRunner } from "typeorm";

export class fixAddressNumber1678061807306 implements MigrationInterface {
    name = 'fixAddressNumber1678061807306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" SET NOT NULL`);
    }

}
