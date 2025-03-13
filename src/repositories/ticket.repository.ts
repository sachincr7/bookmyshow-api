import { Ticket } from '@/entities/ticket.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TicketRepository {
  constructor(private readonly dataSource: DataSource) {}

  findById(id: number) {
    return this.dataSource.getRepository(Ticket).findOne({
      where: {
        id,
      },
    });
  }

  save(ticket: Ticket) {
    return this.dataSource.getRepository(Ticket).save(ticket);
  }
}
