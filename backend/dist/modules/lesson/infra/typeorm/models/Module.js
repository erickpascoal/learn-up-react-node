"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Course_1 = __importDefault(require("./Course"));
var Lesson_1 = __importDefault(require("./Lesson"));
var Module = /** @class */ (function () {
    function Module() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Module.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Module.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Module.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column('int4')
    ], Module.prototype, "course_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Course_1.default; }, { eager: true }),
        typeorm_1.JoinColumn({ name: "course_id" })
    ], Module.prototype, "course", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Lesson_1.default; }, function (lesson) { return lesson.module; })
    ], Module.prototype, "lessons", void 0);
    Module = __decorate([
        typeorm_1.Entity('module')
    ], Module);
    return Module;
}());
exports.default = Module;
