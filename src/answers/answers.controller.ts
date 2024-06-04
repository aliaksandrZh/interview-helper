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
import {
  ApiCreatedResponse,
  ApiConflictResponse,
  ApiAcceptedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('answers')
@Controller('answers')
export class AnswersController {
  constructor(private answerService: AnswersService) {}

  @Post()
  @ApiCreatedResponse()
  @ApiConflictResponse()
  create(@Body() answer: AnswerCreateDto) {
    return this.answerService.create(answer);
  }

  @Put()
  @ApiAcceptedResponse()
  update(@Body() answer: AnswerUpdateDto) {
    return this.answerService.update(answer);
  }

  @Delete(':id')
  @ApiOkResponse()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.delete(id);
  }
}
