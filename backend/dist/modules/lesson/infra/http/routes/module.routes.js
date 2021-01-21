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
exports.ModuleRouter = void 0;
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var Module_1 = __importDefault(require("../../typeorm/models/Module"));
var ModuleRouter = /** @class */ (function () {
    function ModuleRouter() {
        this.moduleRouter = express_1.Router();
    }
    ModuleRouter.prototype.routes = function () {
        this.moduleRouter.get('', this.findAll);
        this.moduleRouter.get('/:id', this.findById);
        this.moduleRouter.get('/course/:courseId', this.findAllByCourseId);
        this.moduleRouter.post('', this.create);
        return this.moduleRouter;
    };
    ModuleRouter.prototype.findAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, modules, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repository = typeorm_1.getRepository(Module_1.default);
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        modules = _a.sent();
                        return [2 /*return*/, response.status(200).json(modules)];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModuleRouter.prototype.findById = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, repository, module_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        repository = typeorm_1.getRepository(Module_1.default);
                        return [4 /*yield*/, repository.findOne({ where: { id: id } })];
                    case 1:
                        module_1 = _a.sent();
                        return [2 /*return*/, response.status(200).json(module_1)];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModuleRouter.prototype.findAllByCourseId = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var courseId, repository, modules, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        courseId = request.params.courseId;
                        repository = typeorm_1.getRepository(Module_1.default);
                        return [4 /*yield*/, repository.find({ where: { course_id: courseId } })];
                    case 1:
                        modules = _a.sent();
                        return [2 /*return*/, response.status(200).json(modules)];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModuleRouter.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, repository, module_2, newModule, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        body = request.body;
                        repository = typeorm_1.getRepository(Module_1.default);
                        module_2 = repository.create(body);
                        return [4 /*yield*/, repository.save(module_2)];
                    case 1:
                        newModule = _a.sent();
                        return [2 /*return*/, response.status(200).json(newModule)];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ModuleRouter;
}());
exports.ModuleRouter = ModuleRouter;
exports.default = new ModuleRouter().routes();
