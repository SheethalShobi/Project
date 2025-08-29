#build stage
FROM node:18-alpine AS build_stage

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .
RUN npm run build


#runtime stage
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build_stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
