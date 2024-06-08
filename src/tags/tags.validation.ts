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
  async validate(value: string, args: ValidationArguments) {
    const [field, isExistValid] = args.constraints;
    const IsTagExist = await this.tagService.isAnyTagExist([value], {
      field,
    });

    if (isExistValid) {
      return IsTagExist;
    }

    return !IsTagExist;
  }
}

export function IsTagExist(
  validationOptions?: ValidationOptions & {
    context: [keyof Tag, isExistValid: boolean];
  },
) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: validationOptions.context,
      validator: IsTagExistConstraint,
    });
  };
}
