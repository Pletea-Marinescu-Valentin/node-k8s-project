# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY app/package*.json ./
RUN npm install --only=production
COPY app .
EXPOSE 4000
CMD ["node", "server.js"]

# Stage 2: Production Image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 4000
CMD ["node", "app/server.js"]
