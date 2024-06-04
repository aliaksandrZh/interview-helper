import { Injectable } from '@nestjs/common';
import { TagsRepository } from './tags.repository';
import { Tag, TagCandidate } from 'src/drizzle/schemas';

@Injectable()
export class TagsService {
  constructor(private repo: TagsRepository) {}

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
}
