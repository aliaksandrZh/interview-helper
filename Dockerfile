ARG NODE_VERSION=18.15.0

FROM node:${NODE_VERSION}-alpine
EXPOSE 3000

WORKDIR /app
# Install Dependencies Before Copying Source Code:
# This can leverage Docker’s layer caching to avoid reinstalling dependencies
# if they haven’t changed.
COPY package.json  ./

RUN yarn

COPY . .

# RUN yarn

CMD yarn run start:dev