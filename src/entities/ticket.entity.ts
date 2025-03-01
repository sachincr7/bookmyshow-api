import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Show } from './show.entity';
import { TicketStatus } from './ticket-status.enum';
import { Payment } from './payment.entity';
import { TicketSeat } from './ticket-seat.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  timeOfBooking: Date;

  @ManyToOne(() => User, (user) => user.tickets)
  bookedBy: User;

  @ManyToOne(() => Show, (show) => show.tickets)
  show: Show;

  @Column({
    type: 'enum',
    enum: TicketStatus,
  })
  status: TicketStatus;

  @OneToMany(() => Payment, (payment) => payment.ticket)
  payments: Payment[];

  @OneToMany(() => TicketSeat, (ticketSeat) => ticketSeat.ticket)
  ticketSeats: TicketSeat[];
}
