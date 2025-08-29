FROM node:18-alpine AS build_stage

# Set working directory
WORKDIR /app

# Copy dependencies first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy source and build
COPY . .
RUN npm run build


FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from React
COPY --from=build_stage /app/build /usr/share/nginx/html

# Copy custom nginx config (if exists)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
