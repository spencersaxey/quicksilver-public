import * as crypto from 'node:crypto';
import { prisma } from './db';

export async function createUser(
  email: string,
  password: string,
): Promise<void> {
  const { salt, passwordHash } = hashPassword(password);
  const userType = 'ADMIN';
  await prisma.user.create({
    data: {
      email,
      passwordHash,
      salt,
      userType,
    },
  });
}

export async function validateLogin(
  email: string,
  password: string,
): Promise<boolean> {
  const userLookup = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!userLookup?.salt) return false;
  return hashMatch(password, userLookup.salt, userLookup.passwordHash);
}

interface EncryptedPassword {
  passwordHash: string;
  salt: string;
}

function hashPassword(password: string): EncryptedPassword {
  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return { passwordHash, salt };
}

export function hashMatch(
  password: string,
  salt: string,
  hash: string,
): boolean {
  const rehash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  return rehash === hash;
}
