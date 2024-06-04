import { Inject, Injectable } from '@nestjs/common';
import { Question, questions } from './drizzle/schemas';
import { DBToken } from './drizzle/drizzle.provider';
import { Database } from './drizzle/drizzle.interface';

@Injectable()
export class AppService {
  constructor(@Inject(DBToken) private db: Database) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getQuestions(): Promise<Question[]> {
    try {
      return await this.db.select().from(questions);
    } catch (e) {
      console.log(e);
    }
  }
}
