"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.awsRouter = void 0;

var _express = require("express");

var _S3SignedUrlService = _interopRequireDefault(require("../../../providers/aws/S3SignedUrlService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class awsRouter {
  constructor() {
    this.awsRouter = void 0;
    this.awsRouter = (0, _express.Router)();
  }

  routes() {
    this.awsRouter.get('/:bucketName/:nameFile/:typeFile', this.getSignedUrl);
    return this.awsRouter;
  }

  async getSignedUrl(request, response) {
    try {
      const {
        bucketName,
        nameFile,
        typeFile
      } = request.params;
      const s3SignedUrlService = new _S3SignedUrlService.default();
      const data = await s3SignedUrlService.execute({
        bucketName,
        nameFile,
        typeFile
      });
      return response.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }

}

exports.awsRouter = awsRouter;

var _default = new awsRouter().routes();

exports.default = _default;