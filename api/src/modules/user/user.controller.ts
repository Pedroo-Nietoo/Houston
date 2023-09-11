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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { SwaggerConflictResponse } from '../helpers/conflict-response';
import { SwaggerBadRequestResponse } from '../helpers/bad-request-response';
import { SwaggerNotFoundResponse } from '../helpers/not-found-response';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiBearerAuth()
@ApiTags('Usuário')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({
    summary: 'Cria um usuário',
    description: 'Cria um usuário na plataforma',
  })
  @ApiCreatedResponse({ status: 201, description: 'Usuário criado' })
  @ApiConflictResponse({
    status: 409,
    description: 'Usuário com mesmo nickname/e-mail já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Public()
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: 'Lista todos os usuários',
    description: 'Lista todos os usuários por página',
  })
  @ApiParam({ name: 'page', description: 'Página de listagem dos usuários', schema: { default: 1 } })
  @ApiOkResponse({ status: 200, description: 'Usuários listados' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('findAll/:page')
  findAll(@Param('page') page: number) {
    return this.userService.findAll(page);
  }

  @ApiOperation({
    summary: 'Lista um usuário específico',
    description:
      'Lista as informações de um usuário específico com base no nickname',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações do usuário listadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Usuário não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Get('find/:nickname')
  findOne(@Param('nickname') nickname: string) {
    return this.userService.findOne(nickname);
  }

  @ApiOperation({
    summary: 'Atualiza as informações de um usuário',
    description: 'Atualiza as informações do perfil do usuário com base no id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Informações do usuário atualizadas',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Usuário não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiConflictResponse({
    status: 409,
    description: 'Usuário com mesmo nickname já existe',
    type: SwaggerConflictResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Patch('update/:id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({
    summary: 'Remove um usuário',
    description:
      'Remove um usuário do sistema ao passar o id do mesmo',
  })
  @ApiOkResponse({ status: 200, description: 'Usuário removido' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Usuário não encontrado',
    type: SwaggerNotFoundResponse,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Requisição inválida',
    type: SwaggerBadRequestResponse,
  })
  @Delete('remove/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.remove(id);
  }
}
