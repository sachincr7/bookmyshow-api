import { User } from '@/entities/user.entity';
import { UserRepository } from '@/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  signUpUser(email: string, password: string) {
    const user = new User();
    user.email = email;
    user.password = password;
    return this.userRepository.save(user);
  }
}
