import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  static getProviders() {
    return [
      UserRepositoryImpl,
      {
        provide: UserRepository,
        useExisting: UserRepositoryImpl,
      },
      PrismaService,
    ];
  }
  constructor(private prismaService: PrismaService) {}

  async findUserById(id: number): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      include: { company: true },
    });
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { email: email },
      include: { company: true },
    });
    return user;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = await this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        facebookId: user.facebookId || null,
        role: user.role,
      },
    });
    return newUser;
  }

  async updateUser(user: UpdateUserDto): Promise<User> {
    const updatedUser = await this.prismaService.user.update({
      where: { id: +user.id },
      data: {
        ...user,
      },
    });
    return updatedUser;
  }

  async deleteUser(id: number): Promise<User> {
    const deletedUser = await this.prismaService.user.delete({ where: { id } });
    return deletedUser;
  }
}
