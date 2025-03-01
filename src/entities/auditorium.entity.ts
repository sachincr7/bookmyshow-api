import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Theatre } from './theatre.entity';
import { Seat } from './seat.entity';
import { Show } from './show.entity';

@Entity()
export class Auditorium {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Theatre, (theatre) => theatre)
  theatre: Theatre;

  @OneToMany(() => Seat, (seat) => seat.auditorium)
  seats: Seat[];

  @OneToMany(() => Show, (show) => show.auditorium)
  shows: Show[];

  @OneToOne(() => Show)
  @JoinColumn()
  show: Show;
}
