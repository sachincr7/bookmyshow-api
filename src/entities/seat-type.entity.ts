import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShowSeatType } from './show-seat-type.entity';
import { Seat } from './seat.entity';

@Entity()
export class SeatType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ShowSeatType, (showSeatType) => showSeatType.seatType)
  showSeatTypes: ShowSeatType[];

  @OneToMany(() => Seat, (seat) => seat.seatType)
  seats: Seat[];
}
