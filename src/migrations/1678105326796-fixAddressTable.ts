import { MigrationInterface, QueryRunner } from "typeorm";

export class fixAddressTable1678105326796 implements MigrationInterface {
    name = 'fixAddressTable1678105326796'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" SET NOT NULL`);
    }

}
