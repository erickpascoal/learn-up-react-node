import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Course from "./Course";
import Lesson from "./Lesson";

@Entity('module')
export default class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('int4')
  course_id: number;

  @ManyToOne(() => Course, { eager: true })
  @JoinColumn({ name: "course_id" })
  course: Course;

  @OneToMany(() => Lesson, lesson => lesson.module)
  lessons: Lesson[];
}