import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Course from '../models/Course';

export class CourseRouter {

  private courseRouter: Router;

  constructor() {
    this.courseRouter = Router();
  }

  public routes() {
    this.courseRouter.get('', this.findAll);
    this.courseRouter.get('/:id', this.findById);
    this.courseRouter.post('', this.create);

    return this.courseRouter;
  }

  private async findAll(request: Request, response: Response) {
    try {
      const repository = getRepository(Course);

      const courses = await repository.find();

      return response.status(200).json(courses);
    } catch (err) {
      console.log(err);
    }
  }

  private async findById(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const repository = getRepository(Course);

      const course = await repository.findOne({ where: { id } });

      return response.status(200).json(course);
    } catch (err) {
      console.log(err);
    }
  }

  private async create(request: Request, response: Response) {
    try {
      const body = request.body;

      const repository = getRepository(Course);

      const course = repository.create(body);

      const newCourse = await repository.save(course);

      return response.status(200).json(newCourse);
    } catch (err) {
      console.log(err);
    }
  }

}

export default new CourseRouter().routes();