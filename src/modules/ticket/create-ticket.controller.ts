import { Body, Controller, Post } from '@nestjs/common';
import { BookTicketRequestDto } from './dtos/book-ticket-request.dto';
import { TicketService } from './services/ticket.service';
import { Ticket } from '@/entities/ticket.entity';

@Controller()
export class CreateTicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('book.json')
  async bookTicket(
    @Body() bookTicketDto: BookTicketRequestDto,
  ): Promise<Ticket> {
    const ticket = await this.ticketService.bookTicket(
      bookTicketDto.seatIds,
      bookTicketDto.showId,
      bookTicketDto.userId,
    );
    return ticket;
  }
}
