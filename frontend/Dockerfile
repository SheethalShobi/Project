# Build stage 
FROM node:18-alpine AS build_stage

WORKDIR /app

COPY package*.json ./

RUN npm ci --silent --legacy-peer-deps

COPY . .

RUN npm run build

# Runtime stage
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build_stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
