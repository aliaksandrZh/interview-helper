import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class TagCreateDto {
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class TagUpdateDto extends TagCreateDto {
  @IsNumber()
  id: number;
}
