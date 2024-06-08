import { Question } from 'src/drizzle/schemas';

export type QuestionValidationContextKeys = keyof Pick<Question, 'id' | 'text'>;
export type QuestionValidationContext = [
  QuestionValidationContextKeys,
  boolean,
];
