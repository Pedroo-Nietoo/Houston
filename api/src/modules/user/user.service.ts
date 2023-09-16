/* eslint-disable prettier/prettier */
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/PrismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExists) {
      throw new ConflictException(`Usuário com o e-mail ${createUserDto.email} já existe`);
    }

    const usernameExists = await this.prisma.user.findFirst({
      where: {
        username: createUserDto.username,
      },
    });

    if (usernameExists) {
      throw new ConflictException(`Usuário com o username ${createUserDto.username} já existe`);
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);

    await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hash,
      },
    });
  }

  findAll(page: number) {
    if (page == 0) {
      return this.prisma.user.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          activities: {
            select: {
              id: true,
            },
          },
          habits: {
            select: {
              id: true,
            },
          },
        },
      });
    } else if (page == 1) {
      return this.prisma.user.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          activities: {
            select: {
              id: true,
            },
          },
          habits: {
            select: {
              id: true,
            },
          },
        },
        take: 20,
      });
    } else {
      return this.prisma.user.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          activities: {
            select: {
              id: true,
            },
          },
          habits: {
            select: {
              id: true,
            },
          },
        },
        take: 20,
        skip: (page - 1) * 20,
      });
    }
  }

  async findOne(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        activities: {
          select: {
            id: true,
          },
        },
        habits: {
          select: {
            id: true,
          },
        },
      },
    });

    const userExists = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não existe');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não existe!');
    }

    const usernameExists = await this.prisma.user.findFirst({
      where: {
        username: updateUserDto.username,
      },
    });

    if (usernameExists) {
      throw new ConflictException(`Usuário com o username ${updateUserDto.username} já existe`);
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(updateUserDto.password, salt);

    return await this.prisma.user.update({
      data: {
        ...updateUserDto,
        password: hash,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não existe');
    }

    await this.prisma.user.delete({
      where: {
        id,
      },
      include: {
        activities: true,
      },
    });
  }

  async findInfos(username: string): Promise<CreateUserDto | undefined> {
    return this.prisma.user.findFirst({
      where: {
        username: username
      }
    });
  }
}
