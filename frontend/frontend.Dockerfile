FROM node:21-alpine as dependencies

WORKDIR /usr/src/frontend

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM node:21-alpine as builder

WORKDIR /frontend

COPY . .

COPY --from=dependencies /frontend/node_modules ./node_modules

RUN yarn build

FROM node:21-alpine as runner

WORKDIR /usr/src/frontend

ENV NODE_ENV production

COPY --from=builder /frontend/public ./public

COPY --from=builder /frontend/package.json ./package.json

COPY --from=builder /frontend/.next ./.next

COPY --from=builder /frontend/node_modules ./node_modules

EXPOSE 3001
CMD ["yarn", "start"]
