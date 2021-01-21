"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CourseRouter = void 0;

var _express = require("express");

var _CreateCourseService = _interopRequireDefault(require("../../../services/course/CreateCourseService"));

var _FindAllCourseService = _interopRequireDefault(require("../../../services/course/FindAllCourseService"));

var _FindByIdCourseService = _interopRequireDefault(require("../../../services/course/FindByIdCourseService"));

var _CourseRepository = _interopRequireDefault(require("../../typeorm/repositories/CourseRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CourseRouter {
  constructor() {
    this.courseRouter = void 0;
    this.courseRouter = (0, _express.Router)();
  }

  routes() {
    this.courseRouter.get('', this.findAll);
    this.courseRouter.get('/:id', this.findById);
    this.courseRouter.post('', this.create);
    return this.courseRouter;
  }

  async findAll(request, response) {
    try {
      const findAllCourseService = new _FindAllCourseService.default();
      const courses = await findAllCourseService.execute();
      return response.status(200).json(courses);
    } catch (err) {
      console.log(err);
    }
  }

  async findById(request, response) {
    try {
      const id = request.params.id;
      const findByIdCourseService = new _FindByIdCourseService.default();
      const course = await findByIdCourseService.execute({
        courseId: +id
      });
      return response.status(200).json(course);
    } catch (err) {
      console.log(err);
    }
  }

  async create(request, response) {
    try {
      const courseRepository = new _CourseRepository.default();
      const body = request.body;
      const createCourseService = new _CreateCourseService.default(courseRepository);
      const newCourse = await createCourseService.execute(body);
      return response.status(200).json(newCourse);
    } catch (err) {
      console.log(err);
    }
  }

}

exports.CourseRouter = CourseRouter;

var _default = new CourseRouter().routes();

exports.default = _default;