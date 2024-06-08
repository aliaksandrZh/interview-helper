import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TagsService } from './tags.service';
import { Injectable } from '@nestjs/common';
import { Tag } from 'src/drizzle/schemas';

export type TagContextValidation = [keyof Tag, boolean];
const tagValidationContextDefault: TagContextValidation = ['id', true];

/**
 * @Injectable is required. Constraint has to be registered in the Nest DI
 * The class should be added to the feature module
 * Context of the App has to be provided with useContext
 *
 *
 * false - validation not passed
 * true - passed
 */

@ValidatorConstraint({ async: true })
@Injectable()
export class IsTagExistConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly tagService: TagsService) {}
  async validate(
    value: string | Tag['id'][] | Tag['text'][],
    args: ValidationArguments,
  ) {
    const [field, isExistValid] = args.constraints;
    const tags = Array.isArray(value) ? value : [value];
    const IsTagExist = await this.tagService.isAnyTagExist(tags, {
      field,
    });

    if (isExistValid) {
      return IsTagExist;
    }

    return !IsTagExist;
  }

  defaultMessage(): string {
    return 'Tags are not valid';
  }
}

export function IsTagExist(
  validationOptions?: ValidationOptions & {
    context?: TagContextValidation;
  },
) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    const context = validationOptions?.context ?? tagValidationContextDefault;
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: context,
      validator: IsTagExistConstraint,
    });
  };
}
