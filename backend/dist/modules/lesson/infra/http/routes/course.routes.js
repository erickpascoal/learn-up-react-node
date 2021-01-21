"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRouter = void 0;
var express_1 = require("express");
var CreateCourseService_1 = __importDefault(require("../../../services/course/CreateCourseService"));
var FindAllCourseService_1 = __importDefault(require("../../../services/course/FindAllCourseService"));
var FindByIdCourseService_1 = __importDefault(require("../../../services/course/FindByIdCourseService"));
var CourseRepository_1 = __importDefault(require("../../typeorm/repositories/CourseRepository"));
var CourseRouter = /** @class */ (function () {
    function CourseRouter() {
        this.courseRouter = express_1.Router();
    }
    CourseRouter.prototype.routes = function () {
        this.courseRouter.get('', this.findAll);
        this.courseRouter.get('/:id', this.findById);
        this.courseRouter.post('', this.create);
        return this.courseRouter;
    };
    CourseRouter.prototype.findAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var findAllCourseService, courses, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        findAllCourseService = new FindAllCourseService_1.default();
                        return [4 /*yield*/, findAllCourseService.execute()];
                    case 1:
                        courses = _a.sent();
                        return [2 /*return*/, response.status(200).json(courses)];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseRouter.prototype.findById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, findByIdCourseService, course, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        findByIdCourseService = new FindByIdCourseService_1.default();
                        return [4 /*yield*/, findByIdCourseService.execute({ courseId: +id })];
                    case 1:
                        course = _a.sent();
                        return [2 /*return*/, response.status(200).json(course)];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CourseRouter.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var courseRepository, body, createCourseService, newCourse, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        courseRepository = new CourseRepository_1.default();
                        body = request.body;
                        createCourseService = new CreateCourseService_1.default(courseRepository);
                        return [4 /*yield*/, createCourseService.execute(body)];
                    case 1:
                        newCourse = _a.sent();
                        return [2 /*return*/, response.status(200).json(newCourse)];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CourseRouter;
}());
exports.CourseRouter = CourseRouter;
exports.default = new CourseRouter().routes();
