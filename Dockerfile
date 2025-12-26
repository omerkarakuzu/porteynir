FROM node:18-alpine

# Sistem bağımlılıkları (bazı paketler bunlara ihtiyaç duyar)
RUN apk add --no-cache \
  python3 \
  make \
  g++ \
  bash

WORKDIR /app

# corepack doğru şekilde aktive edilmeli
RUN corepack enable && corepack prepare pnpm@latest --activate

# Sadece dependency dosyalarını kopyala (cache avantajı)
COPY package.json pnpm-lock.yaml ./

# Lockfile zorunluluğu ile kurulum
RUN pnpm install --frozen-lockfile

# Şimdi proje kodlarını kopyala
COPY . .

# Build
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
