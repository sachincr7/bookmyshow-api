import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Seat } from './seat.entity';
import { Show } from './show.entity';
import { TicketStatus } from './ticket-status.enum';
import { Payment } from './payment.entity';

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
}
