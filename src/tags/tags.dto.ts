import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { Tag } from 'src/drizzle/schemas';
import { IsTagExist } from './tags.validation';

export class TagIdDto {
  @ApiProperty()
  @IsNumber()
  @IsTagExist({
    message: 'Tag $value not found.',
    context: ['id', true] as [keyof Tag, boolean],
  })
  id: number;
}

export class TagCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  @IsTagExist({
    message: 'Tag $value already exists.',
    context: ['text', false] as [keyof Tag, boolean],
  })
  text: string;
}

export class TagUpdateDto extends TagIdDto {
  @ApiProperty()
  @Length(0, 500)
  text: string;
}

export class TagDto extends TagUpdateDto implements Tag {}
