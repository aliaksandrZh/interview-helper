import { Inject, Injectable } from '@nestjs/common';
import { Question, questions } from './drizzle/schemas';
import { Database } from './drizzle/drizzle.provider';

@Injectable()
export class AppService {
  constructor(@Inject('DB') private db: Database) {}
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
