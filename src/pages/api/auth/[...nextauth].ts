import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '@/utils/prismadb'

export const authOptions = {
	// Configure one or more authentication providers
	adapter: PrismaAdapter(prisma),

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		} as any),
	],
	secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
