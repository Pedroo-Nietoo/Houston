/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerBadRequestResponse } from '../helpers/bad-request-response';
import { SwaggerConflictResponse } from '../helpers/conflict-response';
import { SwaggerNotFoundResponse } from '../helpers/not-found-response';

@ApiTags('Atividade')
@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) { }

  @ApiOperation({
    summary: 'Cria uma atividade',
    description: 'Cria uma atividade na plataforma',
  })
  @ApiCreatedResponse({ status: 201, description: 'Atividade criada' })
  @ApiConflictResponse({
    status: 409,
    description: 'Atividade com mesmo título já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Post('create')
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @ApiOperation({
    summary: 'Lista todas as Atividades',
    description: 'Lista todas as atividades por página',
  })
  @ApiParam({ name: 'page', schema: { default: 1 } })
  @ApiOkResponse({ status: 200, description: 'Atividades listadas' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findAll/:page')
  findAll(@Param('page') page: number) {
    return this.activityService.findAll(page);
  }

  @ApiOperation({
    summary: 'Lista uma atividade específica',
    description:
      'Lista as informações de uma atividade específica com base no id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações da atividade listadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Atividade não encontrada',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findOne/:id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.activityService.findOne(id);
  }

  @ApiOperation({
    summary: 'Atualiza as informações de uma atividade',
    description: 'Atualiza as informações da atividade com base no id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações da atividade atualizadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Atividade não encontrada',
    type: SwaggerNotFoundResponse,
  })
  @ApiConflictResponse({
    status: 409,
    description: 'Atividade com mesmo título já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Patch('update/:id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activityService.update(id, updateActivityDto);
  }

  @ApiOperation({
    summary: 'Remove uma atividade',
    description:
      'Remove uma atividade do sistema ao passar o id da mesma',
  })
  @ApiOkResponse({ status: 200, description: 'Atividade removida' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Atividade não encontrada',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Delete('remove/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.activityService.remove(id);
  }
}