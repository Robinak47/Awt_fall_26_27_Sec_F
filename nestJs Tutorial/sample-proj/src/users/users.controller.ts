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
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UploadedFiles,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';
import { GetParamDto } from './dtos/gertParam.dto.js';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { promises as fs } from 'fs';
import type { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return `All Users List:`;
  }

  @Get('getUser/:id')
  getUserById(@Param() params: GetParamDto) {
    console.log(typeof params.id);
    return params;
  }

  @Get('getUserByName')
  getUserByName(
    @Query('isFootballer', new DefaultValuePipe(true), ParseBoolPipe)
    isFootballer: boolean,
  ) {
    console.log(typeof isFootballer);
    console.log(isFootballer);
    return { isFootballer };
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
    return user;
  }

  @Patch('update-user/:id')
  updateUserPartially(@Body() user: UpdateUserDto) {
    console.log(user);
    return user;
  }

  @Post('upload-profile-pic')
  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     const fileName = Date.now() + file.originalname;
      //     cb(null, fileName);
      //   },
      // }),
    }),
  )
  async uploadProfilePic(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 2,
          }),

          new FileTypeValidator({
            fileType: /image\/jpeg/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const fileName = Date.now() + file.originalname;
    const path = `./uploads/${fileName}`;
    await fs.writeFile(path, file.buffer);

    console.log(file.originalname);
    console.log(file.mimetype);
    console.log(file.size);
  }

  @Get('file-download/download/download')
  fileDownload(@Query('fileName') fileName: string, @Res() res: Response) {
    res.sendFile(fileName, { root: './uploads' });
  }
}
