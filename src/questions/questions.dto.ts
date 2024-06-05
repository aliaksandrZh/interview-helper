import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  Length,
  Min,
} from 'class-validator';
import { Category, Tag } from 'src/drizzle/schemas';

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

  // TODO: validate is the tags are in the range of db_tags
  @ApiProperty({
    type: [Number],
    required: false,
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  tags: Tag['id'][];
}

export class QuestionUpdateDto extends QuestionCreateDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}
