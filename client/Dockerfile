FROM node:lts as builder
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --production=false --non-interactive --frozen-lockfile
COPY . /app
RUN yarn build

FROM nginx:stable
COPY --from=builder /app/build /usr/share/nginx/html
