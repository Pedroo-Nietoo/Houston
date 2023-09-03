/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class SwaggerConflictResponse {
    @ApiProperty()
    message: string;
    @ApiProperty()
    error: string;
    @ApiProperty()
    statusCode: number;
}