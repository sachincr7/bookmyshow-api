import { User } from '@/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(private readonly dataSource: DataSource) {}

  findById(id: number) {
    return this.dataSource.getRepository(User).findOne({
      where: {
        id,
      },
    });
  }

  save(user: User) {
    return this.dataSource.getRepository(User).save(user);
  }
}
