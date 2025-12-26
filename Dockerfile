# ---------- BUILD STAGE ----------
FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat python3 make g++

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ---------- RUNTIME STAGE ----------
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

# Mevcut node kullanıcısını kullan
USER node

CMD ["npm", "start"]
