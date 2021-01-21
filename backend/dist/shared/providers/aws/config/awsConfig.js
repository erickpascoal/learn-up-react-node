"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signedUrl = void 0;
const signedUrl = {
  accessKey: process.env.AWS_ACCESS_KEY,
  secretKey: process.env.AWS_SECRET_KEY,
  defaultBucket: process.env.S3_BUCKET
};
exports.signedUrl = signedUrl;