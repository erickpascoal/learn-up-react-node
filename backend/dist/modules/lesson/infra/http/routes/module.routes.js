"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModuleRouter = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _Module = _interopRequireDefault(require("../../typeorm/models/Module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ModuleRouter {
  constructor() {
    this.moduleRouter = void 0;
    this.moduleRouter = (0, _express.Router)();
  }

  routes() {
    this.moduleRouter.get('', this.findAll);
    this.moduleRouter.get('/:id', this.findById);
    this.moduleRouter.get('/course/:courseId', this.findAllByCourseId);
    this.moduleRouter.post('', this.create);
    return this.moduleRouter;
  }

  async findAll(request, response) {
    try {
      const repository = (0, _typeorm.getRepository)(_Module.default);
      const modules = await repository.find();
      return response.status(200).json(modules);
    } catch (err) {
      console.log(err);
    }
  }

  async findById(request, response) {
    try {
      const id = request.params.id;
      const repository = (0, _typeorm.getRepository)(_Module.default);
      const module = await repository.findOne({
        where: {
          id
        }
      });
      return response.status(200).json(module);
    } catch (err) {
      console.log(err);
    }
  }

  async findAllByCourseId(request, response) {
    try {
      const courseId = request.params.courseId;
      const repository = (0, _typeorm.getRepository)(_Module.default);
      const modules = await repository.find({
        where: {
          course_id: courseId
        }
      });
      return response.status(200).json(modules);
    } catch (err) {
      console.log(err);
    }
  }

  async create(request, response) {
    try {
      const body = request.body;
      const repository = (0, _typeorm.getRepository)(_Module.default);
      const module = repository.create(body);
      const newModule = await repository.save(module);
      return response.status(200).json(newModule);
    } catch (err) {
      console.log(err);
    }
  }

}

exports.ModuleRouter = ModuleRouter;

var _default = new ModuleRouter().routes();

exports.default = _default;