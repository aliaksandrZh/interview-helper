import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { Database } from 'src/drizzle/drizzle.interface';
import { DBToken } from 'src/drizzle/drizzle.provider';
import { Tag, TagCandidate, tags } from 'src/drizzle/schemas';

@Injectable()
export class TagsRepository {
  constructor(@Inject(DBToken) private db: Database) {}

  async create(tag: TagCandidate): Promise<void> {
    const existedTag = await this.db.query.tags.findFirst({
      where: eq(tags.text, tag.text),
    });
    if (existedTag) {
      throw new HttpException(
        `Tag with the text ${tag.text} already exists`,
        HttpStatus.CONFLICT,
      );
    }

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
}
