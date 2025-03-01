import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movie } from './movie.entity';
import { Ticket } from './ticket.entity';
import { ShowSeatType } from './show-seat-type.entity';
import { Auditorium } from './auditorium.entity';
import { ShowSeat } from './show-seat.entity';

@Entity()
export class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(() => Movie, (movie) => movie.shows)
  movie: Movie;

  @OneToMany(() => Ticket, (ticket) => ticket.show)
  tickets: Ticket[];

  @OneToMany(() => ShowSeatType, (showSeatType) => showSeatType.show)
  showSeatTypes: ShowSeatType[];

  @ManyToOne(() => Auditorium, (auditorium) => auditorium.shows)
  auditorium: Auditorium;

  @OneToMany(() => ShowSeat, (showSeat) => showSeat.show)
  showSeats: ShowSeat[];
}
