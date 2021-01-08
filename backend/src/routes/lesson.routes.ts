import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import Course from '../models/Course';
import Lesson from '../models/Lesson';

export class LessonRouter {

  private lessonRouter: Router;

  constructor() {
    this.lessonRouter = Router();
  }

  public routes() {
    this.lessonRouter.get('', this.findAll);
    this.lessonRouter.get('/module/:moduleId', this.findAllByCourseId);
    this.lessonRouter.post('', this.create);

    return this.lessonRouter;
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

  private async findAllByCourseId(request: Request, response: Response) {
    try {
      const moduleId = request.params.moduleId;

      const repository = getRepository(Lesson);

      const lessons = await repository.find({ where: { module_id: moduleId } });

      return response.status(200).json(lessons);
    } catch (err) {
      console.log(err);
    }
  }

  private async create(request: Request, response: Response) {
    try {
      const body = request.body;

      const repository = getRepository(Lesson);

      const lesson = repository.create(body);

      const newLesson = await repository.save(lesson);

      return response.status(200).json(newLesson);
    } catch (err) {
      console.log(err);
    }
  }

}

export default new LessonRouter().routes();