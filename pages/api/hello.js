// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client/edge';
import useAccelerate from '@prisma/extension-accelerate';

export const config = {
  runtime: "edge",
};

const prisma = new PrismaClient().$extends(useAccelerate);

export default async function handler(req, res) {
  const posts = await prisma.post.findMany();
  res.json(posts);
}
