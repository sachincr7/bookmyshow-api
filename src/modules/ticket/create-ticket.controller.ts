import { Body, Controller, Post } from '@nestjs/common';
import { BookTicketRequestDto } from './dtos/book-ticket-request.dto';
import { BookTicketResponseDto } from './dtos/book-ticket-response.dto';
import { TicketService } from './services/ticket.service';

@Controller()
export class CreateTicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('book.json')
  async bookTicket(
    @Body() bookTicketDto: BookTicketRequestDto,
  ): Promise<BookTicketResponseDto> {
    // return 'Hello World';
  }
}
