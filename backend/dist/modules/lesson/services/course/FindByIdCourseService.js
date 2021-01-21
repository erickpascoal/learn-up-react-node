"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Course = _interopRequireDefault(require("../../infra/typeorm/models/Course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindByIdCourseService {
  async execute({
    courseId
  }) {
    const repository = (0, _typeorm.getRepository)(_Course.default);
    const course = await repository.findOne({
      where: {
        id: courseId
      }
    });
    return course;
  }

}

exports.default = FindByIdCourseService;