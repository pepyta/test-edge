// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const config = {
  runtime: 'edge',
};

export default async function handler(req, res) {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
}
