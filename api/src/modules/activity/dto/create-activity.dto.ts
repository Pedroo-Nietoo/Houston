/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateActivityDto {
    @ApiProperty({ description: 'Título da atividade', type: String, example: 'Arrumar a casa' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: 'Descrição da atividade', type: String, example: 'Varrer, passar pano, arrumar a cama, tirar poeira...' })
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty({ description: 'Tag da atividade', type: String, example: 'Pessoal' })
    @IsString()
    @IsNotEmpty()
    tag: string;

    @ApiProperty({ description: 'Status da atividade', type: Boolean, example: false, default: false })
    @IsString()
    @IsNotEmpty()
    completed: boolean;

    @ApiProperty({ description: 'Id do usuário da atividade', type: String, example: 'd5d7318e-442c-11ee-be56-0242ac120002', required: true })
    @IsString()
    @IsNotEmpty()
    userId: string;
}
