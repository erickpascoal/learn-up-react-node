import { Request, Response, Router } from 'express';
import CreateCourseService from '../../../services/course/CreateCourseService';
import FindAllCourseService from '../../../services/course/FindAllCourseService';
import FindByIdCourseService from '../../../services/course/FindByIdCourseService';

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
      const findAllCourseService = new FindAllCourseService();

      const courses = await findAllCourseService.execute();

      return response.status(200).json(courses);
    } catch (err) {
      console.log(err);
    }
  }

  private async findById(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const findByIdCourseService = new FindByIdCourseService();

      const course = await findByIdCourseService.execute({ courseId: +id });

      return response.status(200).json(course);
    } catch (err) {
      console.log(err);
    }
  }

  private async create(request: Request, response: Response) {
    try {
      const body = request.body;

      const createCourseService = new CreateCourseService();

      const newCourse = await createCourseService.execute(body);

      return response.status(200).json(newCourse);
    } catch (err) {
      console.log(err);
    }
  }

}

export default new CourseRouter().routes();