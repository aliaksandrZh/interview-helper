import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class QuestionCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class QuestionUpdateDto extends QuestionCreateDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
