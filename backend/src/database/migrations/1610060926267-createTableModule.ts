import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableModule1610060926267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            CREATE TABLE module (
                id serial,
                "name" varchar(255) NOT NULL,
                description text NULL,
                course_id int4 NULL,

                CONSTRAINT pk_sub_module PRIMARY KEY (id),
                CONSTRAINT fk_module_course FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
            );
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE module;
        `);
    }
}
