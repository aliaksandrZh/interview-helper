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
import {
  ApiAcceptedResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
  constructor(private questionService: QuestionsService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiConflictResponse()
  create(@Body() question: QuestionCreateDto) {
    return this.questionService.create(question);
  }

  @Put()
  @ApiAcceptedResponse()
  update(@Body() question: QuestionUpdateDto) {
    return this.questionService.update(question);
  }

  @Delete(':id')
  @ApiOkResponse()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.delete(id);
  }
}
