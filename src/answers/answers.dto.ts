import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class AnswerCreateDto {
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class AnswerUpdateDto extends AnswerCreateDto {
  @IsNumber()
  id: number;
}
