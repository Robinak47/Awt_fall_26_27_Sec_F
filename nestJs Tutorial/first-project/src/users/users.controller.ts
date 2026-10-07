import { Controller, Delete, Get } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  doMeowMeow() {
    return 'meow meow';
  }

  @Get('sayHiCat')
  sayHiCat(): any {
    return {
      id: 1,
    };
  }

  @Delete()
  deleteCat() {
    return 'deleted';
  }
}
