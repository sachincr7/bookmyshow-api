import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Show } from './show.entity';
import { Language } from './language.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Show, (show) => show.movie)
  shows: Show[];

  @OneToMany(() => Language, (language) => language.movie)
  languages: Language[];
}
