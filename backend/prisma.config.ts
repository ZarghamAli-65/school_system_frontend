import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  // schema: "prisma/schema.prisma",
  schema: 'prisma/schema/', //full folder not a single file

  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },

  datasource: {
    url: env('DATABASE_URL'),
  },
});
