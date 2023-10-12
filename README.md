# LinkFix for Discord

[![GitHub Actions linting workflow badge][5]][4] [![ghcr.io release badge][6]][3]

<p align="center">
  <img src="./media/github-social-preview.png" alt="LinkFix Logo" width="400" />
</p>

LinkFix for Discord replies to messages containing URLS that don't embed
properly (`x.com`, `twitter.com`, YouTube Shorts) with URLS that do
(`fxtwitter.com`, `youtu.be`).


## [Click Here][1] to add LinkFix to your Discord server!


## Self-Hosting

You can easily self-host this bot with Docker using the following steps:

1. Copy `docker-compose.example.yml` to `docker-compose.yml`
2. Edit `docker-compose.yml` and change the line reading `DISCORD_BOT_TOKEN=` to specify your bot's token
3. Run `docker compose up -d` to start the bot

**NB:** See [discordjs.guide][2] for instructions on how to install Node.js,
set up a bot, get a token, and add it to a server.


## Contributing

tbd.


## License

See `LICENSE.txt`


[1]: https://discord.com/oauth2/authorize?client_id=385950397493280805&scope=bot&permissions=274878286912
[2]: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
[3]: https://github.com/podaboutlist/linkfix-for-discord/pkgs/container/linkfix-for-discord
[4]: https://github.com/podaboutlist/linkfix-for-discord/actions/workflows/lint.yml
[5]: https://img.shields.io/github/actions/workflow/status/podaboutlist/linkfix-for-discord/lint.yml?style=plastic&logo=github&label=code%20style&labelColor=24292e
[6]: https://img.shields.io/github/actions/workflow/status/podaboutlist/linkfix-for-discord/publish-image.yml?style=plastic&logo=github&label=ghcr.io%20release&labelColor=24292e
