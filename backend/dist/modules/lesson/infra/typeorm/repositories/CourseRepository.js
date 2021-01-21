"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Course = _interopRequireDefault(require("../models/Course"));

var _dec, _dec2, _dec3, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CourseRepository = (_dec = (0, _typeorm.EntityRepository)(_Course.default), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_temp = class CourseRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Course.default);
  }

  async create(course) {
    const newCourse = this.ormRepository.create(course);
    await this.ormRepository.save(newCourse);
    return newCourse;
  }

}, _temp)) || _class) || _class) || _class);
exports.default = CourseRepository;