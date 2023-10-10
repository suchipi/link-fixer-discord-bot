# twitfix for Discord

A simple Discord bot that replies to messages containing `x.com`/`twitter.com` links with an equivalent `fxtwitter.com` link for better embed support.


## [Click Here][1] to add twitfix to your server!


## Development

1. Copy `docker-compose.example.yml` to `docker-compose.yml`
2. Edit `docker-compose.yml` and change the line reading `DISCORD_BOT_TOKEN=` to specify your bot's token
3. Run `docker compose up -d` to start the bot

See [discordjs.guide][2] for instructions on how to install Node.js, set up a bot, get a token, and add it to a server


## License

See LICENSE.txt


[1]: https://discord.com/oauth2/authorize?client_id=385950397493280805&scope=bot&permissions=274878286912
[2]: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
