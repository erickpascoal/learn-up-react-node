"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTableLesson1610061352018 = void 0;

class createTableLesson1610061352018 {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE TABLE lesson (
                id serial,
                "name" varchar(255) NOT NULL,
                description text NULL,
                link text NOT NULL,
                module_id int4 NOT NULL,

                CONSTRAINT pk_lesson PRIMARY KEY (id),
                CONSTRAINT fk_lesson_module FOREIGN KEY (module_id) REFERENCES module(id) ON DELETE CASCADE
            );
            `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        DROP TABLE lesson;
        `);
  }

}

exports.createTableLesson1610061352018 = createTableLesson1610061352018;