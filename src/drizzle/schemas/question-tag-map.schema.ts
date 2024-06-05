import { int, mysqlTable } from 'drizzle-orm/mysql-core';
import { Question, QuestionCandidate, questions } from './question.schema';
import { Tag, tags } from './tag.schema';

export const questionTagMaps = mysqlTable('QuestionTagMaps', {
  id: int('id').primaryKey().autoincrement(),
  questionId: int('question_id')
    .notNull()
    .references(() => questions.id),
  tagId: int('tag_id')
    .notNull()
    .references(() => tags.id),
});

export type QuestionTagMap = typeof questionTagMaps.$inferSelect;
export type QuestionTagMapCandidate = typeof questionTagMaps.$inferInsert;
export type QuestionCandidateWithTags = QuestionCandidate & {
  tags: Tag['id'][];
};
export type QuestionWithTags = Question & { tags: Tag['id'][] };
