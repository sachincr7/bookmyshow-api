import { Body, Controller, Post } from '@nestjs/common';
import { SignUpUserRequestDto } from './dtos/create-user-request.dto';
import { UserService } from './services/user.service';

@Controller('user')
export class CreateUserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() signUpUserDto: SignUpUserRequestDto,
  ) {
    const user = await this.userService.signUpUser(
      signUpUserDto.email,
      signUpUserDto.password,
    );
    
    return user;
  }
}
