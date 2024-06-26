import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableSchedulesUsersProperties1677772256143 implements MigrationInterface {
    name = 'createTableSchedulesUsersProperties1677772256143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
    }

}
