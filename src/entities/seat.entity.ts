import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Auditorium } from './auditorium.entity';
import { SeatType } from './seat-type.entity';
import { ShowSeat } from './show-seat.entity';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row: number;

  @Column()
  column: number;

  @ManyToOne(() => Auditorium, (auditorium) => auditorium.seats)
  auditorium: Auditorium;

  @ManyToOne(() => SeatType, (seatType) => seatType.seats)
  seatType: SeatType;

  @OneToMany(() => ShowSeat, (showSeat) => showSeat.seat)
  showSeats: ShowSeat[];
}
