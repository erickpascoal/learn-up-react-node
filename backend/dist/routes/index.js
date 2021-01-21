"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _course = _interopRequireDefault(require("../modules/lesson/infra/http/routes/course.routes"));

var _module = _interopRequireDefault(require("../modules/lesson/infra/http/routes/module.routes"));

var _lesson = _interopRequireDefault(require("../modules/lesson/infra/http/routes/lesson.routes"));

var _aws = _interopRequireDefault(require("../shared/infra/http/routes/aws.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/courses', _course.default);
routes.use('/modules', _module.default);
routes.use('/lessons', _lesson.default);
routes.use('/aws', _aws.default);
var _default = routes;
exports.default = _default;