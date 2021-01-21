"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTableModule1610060926267 = void 0;

class createTableModule1610060926267 {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE TABLE module (
                id serial,
                "name" varchar(255) NOT NULL,
                description text NULL,
                course_id int4 NULL,

                CONSTRAINT pk_sub_module PRIMARY KEY (id),
                CONSTRAINT fk_module_course FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
            );
            `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        DROP TABLE module;
        `);
  }

}

exports.createTableModule1610060926267 = createTableModule1610060926267;