
FROM node:20-alpine

WORKDIR /home/node/app

ENV NODE_ENV development
ENV TZ America/Fortaleza

RUN apk add --no-cache tzdata
