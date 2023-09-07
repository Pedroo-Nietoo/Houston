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
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SwaggerBadRequestResponse } from '../helpers/bad-request-response';
import { SwaggerConflictResponse } from '../helpers/conflict-response';
import { SwaggerNotFoundResponse } from '../helpers/not-found-response';

@ApiTags('Hábito')
@Controller('habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) { }

  @ApiOperation({
    summary: 'Cria um hábito',
    description: 'Cria uma hábito na plataforma',
  })
  @ApiCreatedResponse({ status: 201, description: 'Hábito criado' })
  @ApiConflictResponse({
    status: 409,
    description: 'Hábito com mesmo título já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Post('create')
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitService.create(createHabitDto);
  }

  @ApiOperation({
    summary: 'Lista todos os hábitos',
    description: 'Lista todos os hábitos por página',
  })
  @ApiParam({ name: 'page', description: 'Página de listagem dos hábitos', schema: { default: 1 } })
  @ApiOkResponse({ status: 200, description: 'Hábitos listados' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findAll/:page')
  findAll(@Param('page') page: number) {
    return this.habitService.findAll(page);
  }

  @ApiOperation({
    summary: 'Lista um hábito específico',
    description:
      'Lista as informações de um hábito específico com base no id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações do hábito listadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Hábito não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findOne/:id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.habitService.findOne(id);
  }

  @ApiOperation({
    summary: 'Atualiza as informações de um hábito',
    description: 'Atualiza as informações do hábito com base no id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações do hábito atualizadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Hábito não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiConflictResponse({
    status: 409,
    description: 'Hábito com mesmo título já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Patch('update/:id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitService.update(id, updateHabitDto);
  }

  @ApiOperation({
    summary: 'Remove um hábito',
    description:
      'Remove um hábito do sistema ao passar o id do mesmo',
  })
  @ApiOkResponse({ status: 200, description: 'Hábito removido' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Hábito não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Delete('remove/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.habitService.remove(id);
  }
}