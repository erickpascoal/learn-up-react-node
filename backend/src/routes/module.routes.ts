import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Module from '../models/Module';

export class ModuleRouter {

  private moduleRouter: Router;

  constructor() {
    this.moduleRouter = Router();
  }

  public routes() {
    this.moduleRouter.get('', this.findAll);
    this.moduleRouter.get('/:id', this.findById);
    this.moduleRouter.get('/course/:courseId', this.findAllByCourseId);
    this.moduleRouter.post('', this.create);

    return this.moduleRouter;
  }

  private async findAll(request: Request, response: Response) {
    try {
      const repository = getRepository(Module);

      const modules = await repository.find();

      return response.status(200).json(modules);
    } catch (err) {
      console.log(err);
    }
  }

  private async findById(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const repository = getRepository(Module);

      const module = await repository.findOne({ where: { id } });

      return response.status(200).json(module);
    } catch (err) {
      console.log(err);
    }
  }

  private async findAllByCourseId(request: Request, response: Response) {
    try {

      const courseId = request.params.courseId;

      const repository = getRepository(Module);

      const modules = await repository.find({ where: { course_id: courseId } });

      return response.status(200).json(modules);
    } catch (err) {
      console.log(err);
    }
  }

  private async create(request: Request, response: Response) {
    try {
      const body = request.body;

      const repository = getRepository(Module);

      const module = repository.create(body);

      const newModule = await repository.save(module);

      return response.status(200).json(newModule);
    } catch (err) {
      console.log(err);
    }
  }

}

export default new ModuleRouter().routes();