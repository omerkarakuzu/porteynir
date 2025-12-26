FROM node:18-alpine

WORKDIR /app

# Gerekli bağımlılıklar (bazı paketler build için gerektirir)
RUN apk add --no-cache python3 make g++

COPY package*.json ./

# Lock dosyası varsa deterministik kurulum yap
RUN npm ci --omit=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
