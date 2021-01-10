import { getRepository } from "typeorm";
import Course from "../../infra/typeorm/models/Course";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCourseService {

  public async execute({ name, description }: IRequest) {

    const repository = getRepository(Course);

    const course = repository.create(
      { name, description }
    );

    const newCourse = await repository.save(course);

    return newCourse;
  }

}