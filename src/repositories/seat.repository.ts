import { Seat } from '@/entities/seat.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, In } from 'typeorm';

@Injectable()
export class SeatRepository {
  constructor(private readonly dataSource: DataSource) {}

  findAllByIdIn(seatIds: number[]) {
    return this.dataSource.getRepository(Seat).find({
      where: {
        id: In(seatIds),
      },
    });
  }
}
