// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"
import useAccelerate from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(useAccelerate);

export default async function handler(req, res) {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
}
