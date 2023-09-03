/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitService {
    constructor(private prisma: PrismaService) { }

    async create(createHabitDto: CreateHabitDto) {
        const habitExists = await this.prisma.habit.findFirst({
            where: {
                title: createHabitDto.title,
            },
        });

        if (habitExists) {
            throw new ConflictException(`Hábito "${createHabitDto.title}" já existe`);
        }

        const userExists = await this.prisma.user.findUnique({
            where: {
                id: createHabitDto.userId,
            },
        });

        if (!userExists) {
            throw new ConflictException('Id do usuário não existe')
        }

        await this.prisma.habit.create({
            data: {
                ...createHabitDto,
                userId: createHabitDto.userId,
            },
        });
    }

    findAll(page: number) {
        if (page == 0) {
            return this.prisma.habit.findMany({});
        } else if (page == 1) {
            return this.prisma.habit.findMany({
                take: 20,
            });
        } else {
            return this.prisma.habit.findMany({
                take: 20,
                skip: (page - 1) * 20,
            });
        }
    }

    async findOne(id: string) {
        const user = await this.prisma.habit.findUnique({
            where: {
                id,
            },
        });

        const habitExists = await this.prisma.habit.findUnique({
            where: {
                id: id,
            },
        });

        if (!habitExists) {
            throw new NotFoundException('Hábito não existe');
        }

        return user;
    }

    async update(id: string, updatehabitDto: UpdateHabitDto) {
        const habitExists = await this.prisma.habit.findUnique({
            where: {
                id: id,
            },
        });

        if (!habitExists) {
            throw new NotFoundException('Hábito não existe!');
        }

        return await this.prisma.habit.update({
            data: {
                ...updatehabitDto,
            },
            where: {
                id,
            },
        });
    }

    async remove(id: string) {
        const habitExists = await this.prisma.habit.findUnique({
            where: {
                id,
            },
        });

        if (!habitExists) {
            throw new NotFoundException('Hábito não existe');
        }

        await this.prisma.habit.delete({
            where: {
                id,
            }
        })
    }
}