import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { QuestionsService } from './questions.service';
import { Question } from 'src/drizzle/schemas';
import { QuestionValidationContext } from './questions.type';

const questionValidationContextDefault: QuestionValidationContext = [
  'id',
  true,
];

@ValidatorConstraint({ async: true })
@Injectable()
export class IsQuestionExistConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly questionService: QuestionsService) {}

  async validate(
    value: Question['id'] | Question['text'],
    args: ValidationArguments,
  ) {
    const [field, isExistValid] = args.constraints;

    const IsQuestionExist = this.questionService.isQuestionExist(value, {
      field,
    });

    if (isExistValid) {
      return IsQuestionExist;
    }

    return !IsQuestionExist;
  }

  defaultMessage(): string {
    return 'Question already exists';
  }
}

export function IsQuestionExist(
  validationOptions?: ValidationOptions & {
    context?: QuestionValidationContext;
  },
) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    const context =
      validationOptions?.context ?? questionValidationContextDefault;
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: context,
      validator: IsQuestionExistConstraint,
    });
  };
}
