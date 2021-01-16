import { Request, Response, Router } from 'express';
import S3SignedUrlService from '../../../providers/aws/S3SignedUrlService';


export class awsRouter {

  private awsRouter: Router;

  constructor() {
    this.awsRouter = Router();
  }

  public routes() {
    this.awsRouter.get('/:bucketName/:nameFile/:typeFile', this.getSignedUrl);
    return this.awsRouter;
  }

  private async getSignedUrl(request: Request, response: Response) {
    try {

      const { bucketName, nameFile, typeFile } = request.params;

      const s3SignedUrlService = new S3SignedUrlService();

      const data = await s3SignedUrlService.execute({ bucketName, nameFile, typeFile });

      return response.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }

}

export default new awsRouter().routes();