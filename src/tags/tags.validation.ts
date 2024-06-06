import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { TagsService } from './tags.service';
import { Injectable } from '@nestjs/common';

/**
 * @Injectable is required. Constraint has to be registered in the Nest DI
 * The class should be added to the feature module
 * Context of the App has to be provided with useContext
 */
@ValidatorConstraint({ async: true })
@Injectable()
export class IsTagExistConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly tagService: TagsService) {}
  async validate(value: string, args: ValidationArguments) {
    const IsTagExist = await this.tagService.isAnyTagExist([value], {
      field: 'text',
    });
    return !IsTagExist;
  }
}

export function IsTagExist(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsTagExistConstraint,
    });
  };
}

/**
 * Does the tag exist?
 * Get tags from the DB
 * Check
 * or
 * Select any tag of input array from db if true then reject
 */
