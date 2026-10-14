import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
  IsEmail,
  IsBoolean,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: 'meow meow',
  })
  @MinLength(5)
  @MaxLength(10)
  id: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(18)
  @Max(90)
  @Type(() => Number)
  age: number;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  address: string;
  @IsBoolean()
  @IsNotEmpty()
  isBangladeshi: boolean;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(10)
  gender: string;
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password should contain one special char, one number, one uppercase and one lowecase letter and minimum 8 char log',
    },
  )
  password: string;
}
