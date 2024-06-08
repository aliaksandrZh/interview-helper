import { Injectable } from '@nestjs/common';
import { TagsRepositoryService } from './tags.repository';
import { Tag, TagCandidate } from 'src/drizzle/schemas';

@Injectable()
export class TagsService {
  constructor(private repo: TagsRepositoryService) {}

  create(tag: TagCandidate): Promise<void> {
    return this.repo.create(tag);
  }

  update(tag: Tag): Promise<void> {
    return this.repo.update(tag);
  }

  delete(id: Tag['id']): Promise<void> {
    return this.repo.delete(id);
  }

  getAll(): Promise<Tag[]> {
    return this.repo.get();
  }

  isAnyTagExist(
    tags: Tag['id'][] | Tag['text'][],
    options: {
      field: keyof Tag;
    },
  ) {
    if (!tags) return false;

    return this.repo.isAnyTagExist(tags, options);
  }
}
