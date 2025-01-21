import * as jwt from 'jsonwebtoken';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { prisma } from '../data/db';
import { hashMatch } from '../data/user';
import { JWT_KEY } from '../util/constants';

@Injectable()
export class AuthService {
  async login(email: string, pass: string): Promise<any> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user?.passwordHash || !user?.salt) {
      throw new UnauthorizedException();
    }
    const valid = hashMatch(pass, user.salt, user.passwordHash);
    if (!valid) throw new UnauthorizedException();
    return {
      access_token: jwt.sign(
        { email: user.email, type: user.userType },
        JWT_KEY,
        { expiresIn: '1d' },
      ),
    };
  }
}
