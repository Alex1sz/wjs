FROM node:12.18.4-alpine3.11

# work directory within virtualized docker env (using docker-compose)
WORKDIR /app

# Copy package.json to Docker env
COPY package.json /app
RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]
