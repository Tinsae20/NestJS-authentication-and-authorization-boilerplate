import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

const users: User[] = [
  {
    userId: 1,
    username: 'john',
    password: 'changeme',
  },
  {
    userId: 2,
    username: 'chris',
    password: 'secret',
  },
];

@Injectable()
export class UsersService {
  findUserByName(username: string): Promise<User | undefined> {
    const userFound = users.find((user) => user.username === username);
    return Promise.resolve(userFound);
  }
}
