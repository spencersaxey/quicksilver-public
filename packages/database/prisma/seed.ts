import { PrismaClient } from "@prisma/client";
import * as crypto from "node:crypto";

const prisma = new PrismaClient();

export async function createUser(
  email: string,
  password: string
): Promise<void> {
  const { salt, passwordHash } = hashPassword(password);
  const userType = "ADMIN";
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
  password: string
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
  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return { passwordHash, salt };
}

export function hashMatch(
  password: string,
  salt: string,
  hash: string
): boolean {
  const rehash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return rehash === hash;
}

async function seed(): Promise<void> {
  console.log("beginning seed...");
  const email1 = "spencer@mail.com";
  const pass = "test";
  await createUser(email1, pass);

  console.log("created user!");

  const login1 = await validateLogin(email1, pass);
  if (login1) {
    console.log(`logged in as ${email1} successfully!`);
  }

  console.log("done");
}
seed().catch((e) => {
  console.log("failed to seed :(");
  console.log(e);
});
