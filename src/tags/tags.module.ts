import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TagsRepositoryService } from './tags.repository';
import { IsTagExistConstraint } from './tags.validation';

@Module({
  controllers: [TagsController],
  providers: [TagsService, TagsRepositoryService, IsTagExistConstraint],
})
export class TagsModule {}
