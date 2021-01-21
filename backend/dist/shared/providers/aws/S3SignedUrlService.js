"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awsConfig = require("./config/awsConfig");

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class S3SignedUrlService {
  constructor() {
    this.getSignedUrlPromise = (bucketName, nameFile, typeFile) => new Promise((resolve, reject) => {
      const s3 = new _awsSdk.default.S3();
      const s3Params = {
        Bucket: bucketName,
        Key: nameFile,
        Expires: 60,
        ContentType: typeFile,
        ACL: 'public-read'
      };
      s3.getSignedUrl('putObject', s3Params, (err, url) => {
        err ? reject(err => {
          console.log('erro', err);
        }) : resolve(url);
      });
    });
  }

  async execute({
    nameFile,
    typeFile,
    bucketName
  }) {
    this.configureAws();
    const bucketNameSelected = bucketName ? bucketName : _awsConfig.signedUrl.defaultBucket;
    const signedRequestUrl = await this.getSignedUrlPromise(bucketNameSelected, nameFile, typeFile);
    return {
      signedRequestUrl: signedRequestUrl,
      resultUrl: 'https://' + bucketNameSelected + '.s3.amazonaws.com/' + nameFile
    };
  }

  configureAws() {
    _awsSdk.default.config.update({
      accessKeyId: _awsConfig.signedUrl.accessKey,
      secretAccessKey: _awsConfig.signedUrl.secretKey
    });

    _awsSdk.default.config.update({
      signatureVersion: 'v4',
      region: 'us-east-1'
    });
  }

}

exports.default = S3SignedUrlService;