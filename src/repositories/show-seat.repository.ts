import { Seat } from '@/entities/seat.entity';
import { ShowSeat } from '@/entities/show-seat.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, In } from 'typeorm';

@Injectable()
export class ShowSeatRepository {
  constructor(private readonly dataSource: DataSource) {}

  findAllBySeatIn(seats: Seat[]) {
    return this.dataSource.getRepository(ShowSeat).find({
      where: {
        seat: In(seats),
      },
    });
  }

  save(showSeat: ShowSeat) {
    return this.dataSource.getRepository(ShowSeat).save(showSeat);
  }
}
