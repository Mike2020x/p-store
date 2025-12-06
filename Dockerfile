# Base stage
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Dependencies stage
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
# TanStack Start builds to .output/server by default (using vinxi/nitro)
RUN pnpm build

# Runner stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactjs

# Copy built artifacts from builder
# Note: TanStack Start (Vinxi) typically outputs to .output
COPY --from=builder --chown=reactjs:nodejs /app/.output ./.output

USER reactjs

EXPOSE 3000

# Command to start the server
CMD ["node", ".output/server/index.mjs"]
