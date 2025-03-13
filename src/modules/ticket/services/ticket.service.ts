import { ShowSeatStatus } from '@/entities/enums/show-seat-status.enum';
import { ShowSeat } from '@/entities/show-seat.entity';
import { TicketSeat } from '@/entities/ticket-seat.entity';
import { TicketStatus } from '@/entities/ticket-status.enum';
import { Ticket } from '@/entities/ticket.entity';
import { SeatRepository } from '@/repositories/seat.repository';
import { ShowSeatRepository } from '@/repositories/show-seat.repository';
import { ShowRepository } from '@/repositories/show.repository';
import { TicketRepository } from '@/repositories/ticket.repository';
import { UserRepository } from '@/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketService {
  constructor(
    private readonly seatRepository: SeatRepository,
    private readonly showSeatRepository: ShowSeatRepository,
    private readonly showRepository: ShowRepository,
    private readonly userRepository: UserRepository,
    private readonly ticketRepository: TicketRepository,
  ) {}

  async bookTicket(seatIds: number[], showId: number, userId: number) {
    const seats = await this.seatRepository.findAllByIdIn(seatIds);
    const show = await this.showRepository.findById(showId);

    if (!show) {
      throw new Error('Show not found');
    }

    const showSeats = await this.showSeatRepository.findAllBySeatIn(seats);

    for (const showSeat of showSeats) {
      if (showSeat.status !== ShowSeatStatus.AVAILABLE) {
        throw new Error('Seat not available');
      }
    }

    const savedShowSeats: ShowSeat[] = [];

    for (const showSeat of showSeats) {
      showSeat.status = ShowSeatStatus.LOCKED;
      showSeat.lockedAt = new Date();
      const savedShowSeat = await this.showSeatRepository.save(showSeat);

      savedShowSeats.push(savedShowSeat);
    }

    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const ticket = new Ticket();
    ticket.status = TicketStatus.PROCESSING;
    ticket.show = show;
    ticket.ticketSeats = seats.map((seat) => {
      const ticketSeat = new TicketSeat();
      ticketSeat.seat = seat;
      ticketSeat.ticket = ticket;
      return ticketSeat;
    });
    ticket.amount = 0;
    ticket.timeOfBooking = new Date();
    ticket.bookedBy = user;

    const savedTicket = await this.ticketRepository.save(ticket);

    return savedTicket;
  }
}
