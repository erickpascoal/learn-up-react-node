"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedUrl = void 0;
exports.signedUrl = {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY,
    defaultBucket: process.env.S3_BUCKET
};
