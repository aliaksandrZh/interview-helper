ARG NODE_VERSION=18.15.0

FROM node:${NODE_VERSION}-alpine as local

WORKDIR /app
# Install Dependencies Before Copying Source Code:
# This can leverage Docker’s layer caching to avoid reinstalling dependencies
# if they haven’t changed.

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "run", "start:dev"]