// import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { TicketService } from './ticket.service';
// import { BookTicketRequestDto } from './dtos/book-ticket-request.dto';
// import { BookTicketResponseDto } from './dtos/book-ticket-response.dto';

// @Controller('tickets')
// export class TicketController {
//   constructor(private readonly ticketService: TicketService) {}

//   @Post('book')
//   async bookTicket(
//     @Body() bookTicketDto: BookTicketRequestDto,
//   ): Promise<BookTicketResponseDto> {
//     return this.ticketService.bookTicket(bookTicketDto);
//   }
// }
