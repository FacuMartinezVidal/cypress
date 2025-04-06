import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";

/**
 * Options for context creation
 * Add any properties you need in your context
 */
interface CreateContextOptions {
  // Example: session: Session | null
  // Example: prisma: PrismaClient
}

/**
 * Inner context creation function
 * Used to create context without incoming request - useful for testing
 */
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    // Add your context properties here
    // Example: prisma: opts.prisma,
    // Example: session: opts.session,
  };
};

/**
 * Context creator for Next.js tRPC API endpoints
 */
export const createContext = async (opts: { req: Request }) => {
  return {
    req: opts.req,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
