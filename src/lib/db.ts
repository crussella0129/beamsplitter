import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

/**
 * Prisma client singleton for Next.js.
 *
 * In development, Next.js hot-reloads modules which would create a new
 * PrismaClient on every reload, quickly exhausting the database connection
 * pool. This singleton pattern attaches the client to `globalThis` so it
 * persists across reloads.
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://beamsplitter:beamsplitter@localhost:5432/beamsplitter";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
