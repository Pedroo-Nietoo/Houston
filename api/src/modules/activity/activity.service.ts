/* eslint-disable prettier/prettier */
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { CreateActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) { }

  async create(createActivityDto: CreateActivityDto) {
    const activityExists = await this.prisma.activity.findFirst({
      where: {
        title: createActivityDto.title,
      },
    });

    if (activityExists) {
      throw new ConflictException(`Atividade "${createActivityDto.title}" já existe`);
    }

    const userExists = await this.prisma.user.findUnique({
      where: {
        id: createActivityDto.userId,
      },
    });

    if (!userExists) {
      throw new ConflictException('Id do usuário não existe')
    }

    await this.prisma.activity.create({
      data: {
        ...createActivityDto,
        userId: createActivityDto.userId,
      },
    });
  }

  findAll(page: number) {
    if (page == 0) {
      return this.prisma.activity.findMany({});
    } else if (page == 1) {
      return this.prisma.activity.findMany({
        take: 20,
      });
    } else {
      return this.prisma.activity.findMany({
        take: 20,
        skip: (page - 1) * 20,
      });
    }
  }

  async findOne(id: string) {
    const user = await this.prisma.activity.findUnique({
      where: {
        id,
      },
    });

    const activityExists = await this.prisma.activity.findUnique({
      where: {
        id: id,
      },
    });

    if (!activityExists) {
      throw new NotFoundException('Atividade não existe');
    }

    return user;
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    const activityExists = await this.prisma.activity.findUnique({
      where: {
        id: id,
      },
    });

    if (!activityExists) {
      throw new NotFoundException('Atividade não existe!');
    }

    return await this.prisma.activity.update({
      data: {
        ...updateActivityDto,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    const activityExists = await this.prisma.activity.findUnique({
      where: {
        id,
      },
    });

    if (!activityExists) {
      throw new NotFoundException('Atividade não existe');
    }

    await this.prisma.activity.delete({
      where: {
        id,
      }
    })
  }
}
