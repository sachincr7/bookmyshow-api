import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Show } from './show.entity';
import { Seat } from './seat.entity';
import { ShowSeatStatus } from './enums/show-seat-status.enum';

@Entity()
export class ShowSeat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ShowSeatStatus,
  })
  status: ShowSeatStatus;

  @ManyToOne(() => Show, (show) => show.showSeats)
  show: Show;

  @ManyToOne(() => Seat, (seat) => seat.showSeats)
  seat: Seat;
}
