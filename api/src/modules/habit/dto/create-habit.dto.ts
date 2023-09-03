/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateHabitDto {
    @ApiProperty({ description: 'Título do hábito', type: String, example: 'Melhorar a leitura' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Descrição do hábito', type: String, example: 'Ler pelo menos 10 páginas por dia' })
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty({ description: 'Data de início do hábito', type: String, example: '2023-09-03T02:44:18.348Z' })
    @IsNotEmpty()
    @IsDate()
    createdAt: Date;

    @ApiProperty({ description: 'Id do usuário do hábito', type: String, example: 'd5d7318e-442c-11ee-be56-0242ac120002', required: true })
    @IsString()
    @IsNotEmpty()
    userId: string;
}
