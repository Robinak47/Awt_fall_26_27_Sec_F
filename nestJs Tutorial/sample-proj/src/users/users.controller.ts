import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
  Post,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';
import { GetParamDto } from './dtos/gertParam.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllusers() {
    return `All userS List:`;
  }

  @Get('getUserById/:id')
  getUserById(@Param() params: GetParamDto) {
    console.log(typeof params.id);
  }

  @Get('getUserByName')
  getUserByName(
    @Query('isFootballer', new DefaultValuePipe(true), ParseBoolPipe)
    isFootballer: boolean,
  ) {
    console.log(typeof isFootballer);
    console.log(isFootballer);
  }

  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.age);
    console.log(user.address);
    console.log(user.email);
    console.log(user.gender);
    console.log(user.isBangladeshi);
    console.log(user.password);
  }

  @Patch('update-user/:id')
  updateUserPartially(@Body() user: UpdateUserDto) {
    console.log(user);
  }
}
