/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsOptional()
    id?: string;

    @ApiProperty({ description: 'Primeiro nome do usuário', type: String, example: 'Pedro' })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ description: 'Último nome do usuário', type: String, example: 'Silva' })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ description: 'Apelido do usuário', type: String, example: 'PedrooSilvaa' })
    @IsString()
    @IsNotEmpty()
    nickname: string;

    @ApiProperty({ description: 'E-mail do usuário', type: String, example: 'pedrosilva@exemplo.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Senha do usuário', type: String, example: 'Pedro1234!' })
    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ description: 'Nível de acesso do usuário', type: Boolean, example: false, default: false })
    @IsBoolean()
    @IsOptional()
    isManager: boolean;
}