import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { Tag } from 'src/drizzle/schemas';

export class TagCreateDto {
  @ApiProperty()
  @Length(0, 500)
  @IsNotEmpty()
  text: string;
}

export class TagUpdateDto extends TagCreateDto {
  @ApiProperty()
  @IsNumber()
  id: number;
}

export class TagDto extends TagUpdateDto implements Tag {}
