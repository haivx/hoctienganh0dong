FROM node:14-alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 5000

COPY ./nginx/default.conf etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html