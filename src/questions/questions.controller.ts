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
  create(@Body() answer: QuestionCreateDto) {
    return this.questionService.create(answer);
  }

  @Put()
  @ApiAcceptedResponse()
  update(@Body() answer: QuestionUpdateDto) {
    return this.questionService.update(answer);
  }

  @Delete(':id')
  @ApiOkResponse()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.delete(id);
  }
}
