import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { City } from './city.entity';
import { Auditorium } from './auditorium.entity';

@Entity()
export class Theatre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => City, (city) => city.theatres)
  city: City;

  @OneToMany(() => Auditorium, (auditorium) => auditorium.theatre)
  auditoriums: Auditorium[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
