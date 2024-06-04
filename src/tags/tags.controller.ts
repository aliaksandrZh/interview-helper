import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagCreateDto, TagDto, TagUpdateDto } from './tags.dto';
import {
  ApiAcceptedResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Tag } from 'src/drizzle/schemas';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiConflictResponse()
  create(@Body() tag: TagCreateDto) {
    return this.tagsService.create(tag);
  }

  @Put()
  @ApiAcceptedResponse()
  update(@Body() tag: TagUpdateDto) {
    return this.tagsService.update(tag);
  }

  @Delete(':id')
  @ApiOkResponse()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Get()
  @ApiOkResponse({
    type: [TagDto],
  })
  get(): Promise<Tag[]> {
    return this.tagsService.getAll();
  }
}
