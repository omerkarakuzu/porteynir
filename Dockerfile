FROM node:18-alpine AS build

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./

# BUILD aşamasında devDependencies dahil kur
RUN npm ci

COPY . .

RUN npm run build


# ---- Runtime image ----
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Sadece prod bağımlılıkları
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["npm", "start"]
