/* eslint-disable prettier/prettier */
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as archiver from 'archiver';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Termos de Serviço')
@Controller()
export class ApiController {
  @ApiOperation({
    summary: 'Baixa os Termos de Serviço da aplicação',
    description: 'Rota responsável pelo downlaod dos arquivos de Política de Privacidade e de Termos de Uso compactados no arquivo Termos de Serviço.zip'
  })
  @Get('termsOfService')
  async getTermsOfService(@Res() res: Response) {
    const pdfPath1 = path.join(__dirname, '..', '..', 'assets', 'privacyPolicy.pdf');
    const pdfPath2 = path.join(__dirname, '..', '..', 'assets', 'termsOfUse.pdf');

    const archive = archiver('zip');

    archive.append(fs.createReadStream(pdfPath1), { name: 'Política de Privacidade.pdf' });
    archive.append(fs.createReadStream(pdfPath2), { name: 'Termos de Uso.pdf' });

    res.attachment('Termos de Serviço.zip'); // Define o nome do arquivo a ser baixado
    archive.pipe(res);

    await archive.finalize();
  }
}
