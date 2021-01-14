import { EntityRepository, getRepository, Repository } from "typeorm";
import CreateCourseDTO from "../../../dtos/CreateCourseDTO";
import ICourseRepository from "../../../repositories/ICourseRepository";
import Course from "../models/Course";

@EntityRepository(Course)
export default class CourseRepository implements ICourseRepository {

  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async create(course: CreateCourseDTO): Promise<Course> {
    const newCourse = this.ormRepository.create(course);

    await this.ormRepository.save(newCourse);

    return newCourse;
  }


}