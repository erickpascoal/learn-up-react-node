"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var course_routes_1 = __importDefault(require("../modules/lesson/infra/http/routes/course.routes"));
var module_routes_1 = __importDefault(require("../modules/lesson/infra/http/routes/module.routes"));
var lesson_routes_1 = __importDefault(require("../modules/lesson/infra/http/routes/lesson.routes"));
var aws_routes_1 = __importDefault(require("../shared/infra/http/routes/aws.routes"));
var routes = express_1.Router();
routes.use('/courses', course_routes_1.default);
routes.use('/modules', module_routes_1.default);
routes.use('/lessons', lesson_routes_1.default);
routes.use('/aws', aws_routes_1.default);
exports.default = routes;
