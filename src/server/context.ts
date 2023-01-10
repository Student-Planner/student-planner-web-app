// @/src/server/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import prisma from "@/utils/prismadb";

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
    return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;