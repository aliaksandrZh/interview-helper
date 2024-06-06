import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { Tag } from 'src/drizzle/schemas';
import { IsTagExist } from './tags.validation';

export class TagCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  @IsTagExist({
    message: 'Tag $value already exists.',
  })
  text: string;
}

export class TagUpdateDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class TagDto extends TagUpdateDto implements Tag {}
