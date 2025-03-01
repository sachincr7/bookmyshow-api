import { Module } from '@nestjs/common';
import { CreateTicketController } from './create-ticket.controller';
import { TicketService } from './services/ticket.service';

@Module({
  imports: [],
  controllers: [CreateTicketController],
  providers: [TicketService],
})
export class TicketModule {}
