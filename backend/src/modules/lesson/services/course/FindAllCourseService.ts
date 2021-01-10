import { getRepository } from "typeorm";
import Course from "../../infra/typeorm/models/Course";

export default class FindAllCourseService {

  public async execute() {

    const repository = getRepository(Course);

    const courses = await repository.find();

    return courses;
  }

}