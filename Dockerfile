# ============================================================
# 🐳 REACT APPLICATION - DOCKERFILE (Caddy Web Server)
# ============================================================
# Stage 1: Build React app with Node
# Stage 2: Serve with Caddy
# ============================================================

# ─────────────────────────────────────
# STAGE 1: BUILD
# ─────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build

# ─────────────────────────────────────
# STAGE 2: SERVE WITH CADDY
# ─────────────────────────────────────
FROM caddy:2-alpine AS production

# Copy built React files → Caddy's default serve folder
COPY --from=builder /app/build /srv

# Copy your Caddyfile config
COPY Caddyfile /etc/caddy/Caddyfile

# Caddy serves on 80 (HTTP) and 443 (HTTPS auto!)
EXPOSE 80
EXPOSE 443

# Caddy starts automatically — no CMD needed
# caddy:2-alpine already has: CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]