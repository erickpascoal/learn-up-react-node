import { getRepository } from "typeorm";
import Course from "../../infra/typeorm/models/Course";

interface IRequest {
  courseId: number;
}

export default class FindByIdCourseService {

  public async execute({ courseId }: IRequest) {

    const repository = getRepository(Course);

    const course = await repository.findOne({ where: { id: courseId } });

    return course;
  }

}