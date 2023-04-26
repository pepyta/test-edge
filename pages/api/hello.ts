// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client/edge';
import useAccelerate from '@prisma/extension-accelerate';

export const config = {
  runtime: "edge",
};

// @ts-ignore
const prisma: PrismaClient = new PrismaClient().$extends(useAccelerate);

export default async function MyEdgeFunction(
  request: NextRequest,
  context: NextFetchEvent,
) {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}