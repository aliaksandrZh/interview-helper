import { Inject, Injectable } from '@nestjs/common';
import { DrizzleToken } from './drizzle/drizzle.definition';
import { Database } from './drizzle/drizzle.interface';
import { Question, questions } from './drizzle/schemas';

@Injectable()
export class AppService {
  constructor(@Inject(DrizzleToken) private db: Database) {}
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
