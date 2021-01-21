"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTableCourse1610060116470 = void 0;

class createTableCourse1610060116470 {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE TABLE course (
                id serial,
                name varchar(255) NULL,
                description varchar(255) NULL,
                color varchar(255) NULL,
                url_image text NULL,

                CONSTRAINT pk_course PRIMARY KEY (id)
            );
            `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
        DROP TABLE course;
        `);
  }

}

exports.createTableCourse1610060116470 = createTableCourse1610060116470;