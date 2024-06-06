import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { Database } from 'src/drizzle/drizzle.interface';
import { DBToken } from 'src/drizzle/drizzle.provider';
import { Tag, TagCandidate, tags } from 'src/drizzle/schemas';

@Injectable()
export class TagsRepositoryService {
  constructor(@Inject(DBToken) private db: Database) {}

  async create(tag: TagCandidate): Promise<void> {
    await this.db.insert(tags).values(tag);
  }

  async delete(id: Tag['id']): Promise<void> {
    await this.db.delete(tags).where(eq(tags.id, id));
  }

  async update(tag: Tag): Promise<void> {
    await this.db.update(tags).set(tag).where(eq(tags.id, tag.id));
  }

  async get(): Promise<Tag[]> {
    return await this.db.select().from(tags);
  }

  async isAnyTagExist(
    tagCandidates: Tag['id'][] | Tag['text'][],
    options: {
      field: keyof Tag;
    },
  ): Promise<boolean> {
    if (!tagCandidates) {
      return true;
    }

    return !!(await this.db.query.tags.findFirst({
      where: (tags, { inArray }) => inArray(tags[options.field], tagCandidates),
    }));
  }
}
