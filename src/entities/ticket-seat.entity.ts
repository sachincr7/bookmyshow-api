import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Seat } from './seat.entity';

@Entity()
export class TicketSeat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.ticketSeats)
  ticket: Ticket;

  @ManyToOne(() => Seat, (seat) => seat.ticketSeats)
  seat: Seat;
} 