import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, Length } from 'class-validator';
import { Category } from 'src/drizzle/schemas';

export class QuestionCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  text: string;

  @IsEnum(Category)
  @IsNotEmpty()
  @ApiProperty({
    enum: Category,
  })
  category: Category;
}

export class QuestionUpdateDto extends QuestionCreateDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
