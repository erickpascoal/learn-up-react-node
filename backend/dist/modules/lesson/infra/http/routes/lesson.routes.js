"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LessonRouter = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _Course = _interopRequireDefault(require("../../typeorm/models/Course"));

var _Lesson = _interopRequireDefault(require("../../typeorm/models/Lesson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LessonRouter {
  constructor() {
    this.lessonRouter = void 0;
    this.lessonRouter = (0, _express.Router)();
  }

  routes() {
    this.lessonRouter.get('', this.findAll);
    this.lessonRouter.get('/module/:moduleId', this.findAllByCourseId);
    this.lessonRouter.post('', this.create);
    return this.lessonRouter;
  }

  async findAll(request, response) {
    try {
      const repository = (0, _typeorm.getRepository)(_Course.default);
      const courses = await repository.find();
      return response.status(200).json(courses);
    } catch (err) {
      console.log(err);
    }
  }

  async findAllByCourseId(request, response) {
    try {
      const moduleId = request.params.moduleId;
      const repository = (0, _typeorm.getRepository)(_Lesson.default);
      const lessons = await repository.find({
        where: {
          module_id: moduleId
        }
      });
      return response.status(200).json(lessons);
    } catch (err) {
      console.log(err);
    }
  }

  async create(request, response) {
    try {
      const body = request.body;
      const repository = (0, _typeorm.getRepository)(_Lesson.default);
      const lesson = repository.create(body);
      const newLesson = await repository.save(lesson);
      return response.status(200).json(newLesson);
    } catch (err) {
      console.log(err);
    }
  }

}

exports.LessonRouter = LessonRouter;

var _default = new LessonRouter().routes();

exports.default = _default;