import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Module from "./Module";

@Entity('course')
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  color: string;


  @OneToMany(() => Module, module => module.course)
  modules: Module[];
}