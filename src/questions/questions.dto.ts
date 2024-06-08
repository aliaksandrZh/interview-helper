import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';
import { Category, Tag } from 'src/drizzle/schemas';
import { TagIdDto } from 'src/tags/tags.dto';
import { IsTagExist } from 'src/tags/tags.validation';
import { IsQuestionExist } from './questions.validation';
import { QuestionValidationContext } from './questions.type';

export class QuestionIdDto {
  @ApiProperty()
  @IsNumber()
  @IsQuestionExist({
    message: 'Question $value not found.',
  })
  id: number;
}

export class QuestionCreateDto {
  @IsEnum(Category)
  @IsNotEmpty()
  @ApiProperty({
    enum: Category,
  })
  category: Category;

  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  @IsQuestionExist({ context: ['text', false] as QuestionValidationContext })
  text: string;

  @ApiProperty({
    required: false,
    type: () => [TagIdDto],
  })
  @IsOptional()
  @IsTagExist()
  tags: Tag['id'][];
}

export class QuestionUpdateDto extends QuestionIdDto {
  //  TODO: I need to check that any other question doesn't have such text to avoid duplicating
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

  @ApiProperty({
    required: false,
    type: () => [TagIdDto],
  })
  @IsOptional()
  @IsTagExist()
  tags: Tag['id'][];
}
