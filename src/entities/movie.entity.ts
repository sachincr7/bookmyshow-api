import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Show } from './show.entity';
import { Language } from './language.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @OneToOne(() => Show, (show) => show.movie)
  show: Show;

  @OneToMany(() => Language, (language) => language.movie)
  languages: Language[];
}
