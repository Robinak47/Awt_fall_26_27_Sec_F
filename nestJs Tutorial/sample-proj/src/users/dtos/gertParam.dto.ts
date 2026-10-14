import { IsInt } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class GetParamDto {
  @IsInt({ message: 'number is expected' })
  @Transform(({ value }) => Number(value))
  id: number;
}
