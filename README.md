# Discord "Link Fixer" bot

when someone posts a message with a link whose media doesn't embed (on supported sites), it replies with a version of that link that _does_ embed

Supported sites:

- `x.com` -> `vxtwitter.com`
- `twitter.com` -> `vxtwitter.com`
- `instagram.com` -> `ddinstagram.com`
- `tiktok.com` -> `vxtiktok.com`
- `reddit.com` -> `vxreddit.com`
- `pixiv.com` -> `phixiv.com`
- `pixiv.net` -> `phixiv.net`

## Usage

- copy src/config.example.json to src/config.json
- add your bot token to src/config.json
- install Node.js
- `npm install`
- `npm start`

See [discordjs.guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) for instructions on how to install Node.js, set up a bot, get a token, and add it to a server

## License

Public Domain, with thanks to RalphORama
