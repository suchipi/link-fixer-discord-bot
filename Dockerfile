FROM node:lts-alpine

LABEL org.opencontainers.image.title="LinkFix for Discord" \
      org.opencontainers.image.description="LinkFix is a Discord bot that replies to messages containing annoying links (Twitter, YouTube Shorts) with better ones (fxtwitter, youtu.be)" \
      org.opencontainers.image.authors="Lily Skye <me@suchipi.com>, Ralph <ralph@podaboutli.st>" \
      org.opencontainers.image.licenses="AGPL-3.0-or-later"

WORKDIR /app

# Install dependencies with NPM
COPY package*.json .
RUN npm ci --omit=dev

COPY . .

RUN [ "npm", "run", "build" ]

CMD [ "npm", "start" ]
