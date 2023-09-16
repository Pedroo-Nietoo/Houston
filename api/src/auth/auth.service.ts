/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async signIn(username: string, pass: string) {
    const user = await this.userService.findInfos(username);

    const isMatch = await bcrypt.compare(pass, user.password);

    if (isMatch) {
      const payload = { id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName };
      return await this.jwtService.signAsync(payload)
    } else {
      throw new UnauthorizedException('Senha incorreta');
    }
  }
}
