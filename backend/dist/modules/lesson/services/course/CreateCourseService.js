"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CreateCourseService {
  constructor(courseRepository) {
    this.courseRepository = courseRepository;
  }

  async execute({
    name,
    description,
    urlImage,
    color
  }) {
    const newCourse = await this.courseRepository.create({
      name,
      description,
      urlImage,
      color
    });
    return newCourse;
  }

}

exports.default = CreateCourseService;