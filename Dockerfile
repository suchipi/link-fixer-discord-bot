FROM node:lts-alpine

LABEL org.opencontainers.image.title="twitfix for Discord" \
      org.opencontainers.image.description="A Discord bot that replies to messages containing x.com/twitter.com lins with fxtwitter.com links for better embed support." \
      org.opencontainers.image.authors="Lily Skye <me@suchipi.com>, Ralph <ralph@podaboutli.st>" \
      org.opencontainers.image.licenses="AGPL-3.0-or-later"

WORKDIR /app

# Install dependencies with NPM
COPY package*.json .
RUN npm ci --omit=dev

COPY . .

RUN [ "npm", "run", "build" ]

CMD [ "npm", "start" ]
