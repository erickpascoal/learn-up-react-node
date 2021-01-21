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
var Module_1 = __importDefault(require("./Module"));
var Lesson = /** @class */ (function () {
    function Lesson() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Lesson.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Lesson.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Lesson.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Lesson.prototype, "link", void 0);
    __decorate([
        typeorm_1.Column('int4')
    ], Lesson.prototype, "module_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Module_1.default; }, { eager: true }),
        typeorm_1.JoinColumn({ name: "module_id" })
    ], Lesson.prototype, "module", void 0);
    Lesson = __decorate([
        typeorm_1.Entity('lesson')
    ], Lesson);
    return Lesson;
}());
exports.default = Lesson;
