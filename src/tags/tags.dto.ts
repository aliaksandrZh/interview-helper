import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { Tag } from 'src/drizzle/schemas';
import { IsTagExist, TagContextValidation } from './tags.validation';

export class TagIdDto {
  @ApiProperty()
  @IsNumber()
  @IsTagExist({
    message: 'Tag $value not found.',
    context: ['id', true] as TagContextValidation,
  })
  id: number;
}

export class TagCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  @IsTagExist({
    message: 'Tag $value already exists.',
    context: ['text', false] as TagContextValidation,
  })
  text: string;
}

export class TagUpdateDto extends TagIdDto {
  @ApiProperty()
  @Length(0, 500)
  text: string;
}

export class TagDto extends TagUpdateDto implements Tag {}
