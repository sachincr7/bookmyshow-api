import { Seat } from '@/entities/seat.entity';
import { Show } from '@/entities/show.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, In } from 'typeorm';

@Injectable()
export class ShowRepository {
  constructor(private readonly dataSource: DataSource) {}

  findById(id: number) {
    return this.dataSource.getRepository(Show).findOne({
      where: {
        id,
      },
    });
  }
}
