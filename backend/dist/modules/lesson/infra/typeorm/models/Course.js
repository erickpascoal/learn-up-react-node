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
var Course = /** @class */ (function () {
    function Course() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Course.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Course.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Course.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Course.prototype, "color", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: 'url_image' })
    ], Course.prototype, "urlImage", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Module_1.default; }, function (module) { return module.course; })
    ], Course.prototype, "modules", void 0);
    Course = __decorate([
        typeorm_1.Entity('course')
    ], Course);
    return Course;
}());
exports.default = Course;
