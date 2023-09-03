/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, PrismaService],
})
export class ActivityModule { }
