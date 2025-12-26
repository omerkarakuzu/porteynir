# ---------- BUILD STAGE ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Build için gerekli paketler
RUN apk add --no-cache libc6-compat python3 make g++

COPY package*.json ./

RUN npm ci

COPY . .

# Next.js derleme
RUN npm run build


# ---------- RUNTIME STAGE ----------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Next.js runtime için gerekli dizinler
RUN addgroup -g 1001 nodejs \
  && adduser -u 1001 -G nodejs -s /bin/sh -D node

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

USER node

CMD ["npm", "start"]
