import prisma from "@/prisma/client";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = ({
    adapter: PrismaAdapter(prisma),
    providers: []
})

export default authOptions;