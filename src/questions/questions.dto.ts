import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class QuestionCreateDto {
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class QuestionUpdateDto extends QuestionCreateDto {
  @IsNumber()
  id: number;
}
