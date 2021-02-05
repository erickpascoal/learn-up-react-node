import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Module from "./Module";

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  text: string;

  @Column('varchar')
  link: string;

  @Column('varchar', { name: 'markdown_text' })
  markdownText: string;

  @Column('int4')
  module_id: number;

  @ManyToOne(() => Module, { eager: true })
  @JoinColumn({ name: "module_id" })
  module: Module;
}