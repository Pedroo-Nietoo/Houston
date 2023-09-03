/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class SwaggerBadRequestResponse {
    @ApiProperty()
    message: string;
    @ApiProperty()
    error: string;
    @ApiProperty()
    statusCode: number;
}