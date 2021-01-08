import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableCourse1610060116470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            CREATE TABLE course (
                id serial,
                name varchar(255) NULL,
                description varchar(255) NULL,
                color varchar(255) NULL,

                CONSTRAINT pk_course PRIMARY KEY (id)
            );
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE course;
        `);
    }
}
