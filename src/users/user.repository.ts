import { CreateUserDto, UpdateUserDto, User } from './user';

export abstract class UserRepository {
  abstract findUserById(id: number): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
  abstract createUser(user: CreateUserDto): Promise<User>;
  abstract updateUser(user: UpdateUserDto): Promise<User>;
  abstract deleteUser(id: number): Promise<User>;
}
