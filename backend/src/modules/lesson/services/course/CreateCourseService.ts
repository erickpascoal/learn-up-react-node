import CourseDTO from "../../dtos/CourseDTO";
import CreateCourseDTO from "../../dtos/CreateCourseDTO";
import ICourseRepository from "../../repositories/ICourseRepository";

export default class CreateCourseService {

  constructor(private courseRepository: ICourseRepository) {
  }

  public async execute({ name, description, urlImage, color }: CreateCourseDTO): Promise<CourseDTO> {

    const newCourse = await this.courseRepository.create({ name, description, urlImage, color });

    return newCourse;
  }

}