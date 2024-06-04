import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class AnswerCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class AnswerUpdateDto extends AnswerCreateDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
