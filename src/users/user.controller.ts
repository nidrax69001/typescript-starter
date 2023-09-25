import {
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
  Controller,
} from '@nestjs/common';
import { User } from './user';
import { CreateUserDto } from './user';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/users')
  async findAll(@Query('email') email: string): Promise<User> {
    const user = await this.userService.findUserByEmail(email);
    return user;
  }

  @Post('/users')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }
}
