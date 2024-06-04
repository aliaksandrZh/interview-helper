import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswerCreateDto, AnswerUpdateDto } from './answers.dto';

@Controller('answers')
export class AnswersController {
  constructor(private answerService: AnswersService) {}

  @Post()
  create(@Body() answer: AnswerCreateDto) {
    return this.answerService.create(answer);
  }

  @Put()
  update(@Body() answer: AnswerUpdateDto) {
    return this.answerService.update(answer);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.delete(id);
  }
}
