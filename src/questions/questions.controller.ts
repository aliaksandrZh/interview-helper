import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionCreateDto, QuestionUpdateDto } from './questions.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private questionService: QuestionsService) {}

  @Post()
  create(@Body() answer: QuestionCreateDto) {
    return this.questionService.create(answer);
  }

  @Put()
  update(@Body() answer: QuestionUpdateDto) {
    return this.questionService.update(answer);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.delete(id);
  }
}
