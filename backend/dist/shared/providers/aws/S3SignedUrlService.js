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
var awsConfig_1 = require("./config/awsConfig");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var S3SignedUrlService = /** @class */ (function () {
    function S3SignedUrlService() {
        this.getSignedUrlPromise = function (bucketName, nameFile, typeFile) {
            return new Promise(function (resolve, reject) {
                var s3 = new aws_sdk_1.default.S3();
                var s3Params = {
                    Bucket: bucketName,
                    Key: nameFile,
                    Expires: 60,
                    ContentType: typeFile,
                    ACL: 'public-read'
                };
                s3.getSignedUrl('putObject', s3Params, function (err, url) {
                    err ? reject(function (err) {
                        console.log('erro', err);
                    }) :
                        resolve(url);
                });
            });
        };
    }
    S3SignedUrlService.prototype.execute = function (_a) {
        var nameFile = _a.nameFile, typeFile = _a.typeFile, bucketName = _a.bucketName;
        return __awaiter(this, void 0, void 0, function () {
            var bucketNameSelected, signedRequestUrl;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.configureAws();
                        bucketNameSelected = bucketName ? bucketName : awsConfig_1.signedUrl.defaultBucket;
                        return [4 /*yield*/, this.getSignedUrlPromise(bucketNameSelected, nameFile, typeFile)];
                    case 1:
                        signedRequestUrl = _b.sent();
                        return [2 /*return*/, {
                                signedRequestUrl: signedRequestUrl,
                                resultUrl: 'https://' + bucketNameSelected + '.s3.amazonaws.com/' + nameFile
                            }];
                }
            });
        });
    };
    S3SignedUrlService.prototype.configureAws = function () {
        aws_sdk_1.default.config.update({ accessKeyId: awsConfig_1.signedUrl.accessKey, secretAccessKey: awsConfig_1.signedUrl.secretKey });
        aws_sdk_1.default.config.update({ signatureVersion: 'v4', region: 'us-east-1' });
    };
    return S3SignedUrlService;
}());
exports.default = S3SignedUrlService;
