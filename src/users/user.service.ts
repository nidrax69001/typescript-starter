import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './user';
import { UserAlreadyExists, UserNotFound } from './user.error';

@Injectable()
export class UserService {
  static getProviders() {
    return [UserService];
  }

  constructor(private userRepository: UserRepository) {}

  async findUserById(id: number) {
    return await this.userRepository.findUserById(id);
  }
  async findUserByEmail(email: string) {
    try {
      return await this.userRepository.findUserByEmail(email);
    } catch (error) {
      if (error instanceof UserNotFound) {
        throw new BadRequestException({ errorCode: 'USER_NOT_FOUND' });
      }
      throw error;
    }
  }
  async createUser(user: CreateUserDto) {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      if (error instanceof UserAlreadyExists) {
        throw new BadRequestException({ errorCode: 'USER_ALREADY_EXISTS' });
      }
      throw error;
    }
  }
  async updateUser(user: UpdateUserDto) {
    return await this.userRepository.updateUser(user);
  }
  async deleteUser(id) {
    return await this.userRepository.deleteUser(id);
  }
}
