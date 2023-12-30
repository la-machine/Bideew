FROM node:18-alpine as angular

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine

COPY --from=angular /app/dist/bideew .