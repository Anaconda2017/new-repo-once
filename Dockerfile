# Stage 1: Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy server and browser directories and .htaccess
COPY server/ ./server/
COPY browser/ ./browser/
COPY .htaccess ./browser/

# Stage 2: Runtime stage
FROM node:20-alpine AS runtime

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built app from build stage
COPY --from=build /app/server ./server
COPY --from=build /app/browser ./browser

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server/server.mjs"] 