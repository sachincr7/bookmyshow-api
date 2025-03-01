import { Module } from '@nestjs/common';
import { TicketModule } from '@/modules/ticket/ticket.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    TicketModule,
    RouterModule.register([
      {
        path: 'api/v1',
        module: V1Module,
        children: [
          {
            path: 'tickets',
            module: TicketModule,
          },
        ],
      },
    ]),
  ],
})
export class V1Module {}
