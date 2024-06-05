FROM node:22-alpine3.19
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]