import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TagsRepositoryService } from './tags.repository';

@Module({
  controllers: [TagsController],
  providers: [TagsService, TagsRepositoryService],
})
export class TagsModule {}
