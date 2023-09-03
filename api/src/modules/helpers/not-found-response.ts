/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class SwaggerNotFoundResponse {
    @ApiProperty()
    message: string;
    @ApiProperty()
    error: string;
    @ApiProperty()
    statusCode: number;
}