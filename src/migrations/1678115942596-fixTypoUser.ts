import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypoUser1678115942596 implements MigrationInterface {
    name = 'fixTypoUser1678115942596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
