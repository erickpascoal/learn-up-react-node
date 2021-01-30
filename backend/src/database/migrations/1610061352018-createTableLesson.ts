import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableLesson1610061352018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            CREATE TABLE lesson (
                id serial,
                "name" varchar(255) NOT NULL,
                description text NULL,
                type text NOT NULL,
                link text NULL,
                markdown_text text NULL,
                module_id int4 NOT NULL,

                CONSTRAINT pk_lesson PRIMARY KEY (id),
                CONSTRAINT fk_lesson_module FOREIGN KEY (module_id) REFERENCES module(id) ON DELETE CASCADE
            );
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE lesson;
        `);
    }
}
