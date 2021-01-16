import { signedUrl } from './config/awsConfig'
import aws from 'aws-sdk';

interface IRequest {
  nameFile: string,
  typeFile: string,
  bucketName?: string
}

interface IResponse {
  signedRequestUrl: string,
  resultUrl: string,
}

export default class S3SignedUrlService {

  constructor() {
  }

  public async execute({ nameFile, typeFile, bucketName }: IRequest): Promise<IResponse> {

    this.configureAws();

    const bucketNameSelected = bucketName ? bucketName : signedUrl.defaultBucket;

    const signedRequestUrl = await this.getSignedUrlPromise(bucketNameSelected, nameFile, typeFile);

    return {
      signedRequestUrl: signedRequestUrl as string,
      resultUrl: 'https://' + bucketNameSelected + '.s3.amazonaws.com/' + nameFile
    }

  }

  getSignedUrlPromise = (bucketName: string | undefined, nameFile: string, typeFile: string) =>
    new Promise((resolve, reject) => {

      const s3 = new aws.S3();

      const s3Params = {
        Bucket: bucketName,
        Key: nameFile,
        Expires: 60,
        ContentType: typeFile,
        ACL: 'public-read'
      };

      s3.getSignedUrl('putObject', s3Params, (err, url) => {
        err ? reject((err: any) => {
          console.log('erro', err);

        }) :
          resolve(url);
      });
    });

  configureAws() {
    aws.config.update({ accessKeyId: signedUrl.accessKey, secretAccessKey: signedUrl.secretKey });
    aws.config.update({ signatureVersion: 'v4', region: 'us-east-1' });
  }

}