import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Tag, TagCandidate } from 'src/drizzle/schemas';
import { TagsService } from './tags.service';
// TODO: Vaildate request body
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  create(@Body() tag: TagCandidate) {
    return this.tagsService.create(tag);
  }

  @Put()
  update(@Body() tag: Tag) {
    return this.tagsService.update(tag);
  }

  @Delete(':id')
  delete(@Param('id') id: Tag['id']) {
    return this.tagsService.delete(id);
  }

  @Get()
  get() {
    return this.tagsService.getAll();
  }
}
