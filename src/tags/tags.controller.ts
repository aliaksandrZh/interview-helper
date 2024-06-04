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
import { TagCreateDto, TagUpdateDto } from './tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  create(@Body() tag: TagCreateDto) {
    return this.tagsService.create(tag);
  }

  @Put()
  update(@Body() tag: TagUpdateDto) {
    return this.tagsService.update(tag);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Get()
  get() {
    return this.tagsService.getAll();
  }
}
