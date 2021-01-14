import CreateCourseDTO from "../dtos/CreateCourseDTO";
import Course from "../infra/typeorm/models/Course";

export default interface ICourseRepository {
  create(course: CreateCourseDTO): Promise<Course>;
}