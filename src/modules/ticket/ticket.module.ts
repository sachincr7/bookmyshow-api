import { Module } from '@nestjs/common';
import { CreateTicketController } from './create-ticket.controller';
import { TicketService } from './services/ticket.service';
import { SeatRepository } from '@/repositories/seat.repository';
import { ShowRepository } from '@/repositories/show.repository';
import { UserRepository } from '@/repositories/user.repository';
import { ShowSeatRepository } from '@/repositories/show-seat.repository';
import { TicketRepository } from '@/repositories/ticket.repository';

@Module({
  imports: [],
  controllers: [CreateTicketController],
  providers: [
    TicketService,
    TicketRepository,
    ShowSeatRepository,
    SeatRepository,
    ShowRepository,
    UserRepository,
  ],
})
export class TicketModule {}
