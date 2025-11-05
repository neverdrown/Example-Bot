# Modular Discord Bot Template

A fully modular Discord bot template written in JavaScript using Discord.js v14.  
This bot template is designed to be **scalable, maintainable, and easy to customize**.  
It includes a clear folder structure, separate command and event handlers, utility functions, and logging features.  
Perfect for beginners and advanced developers who want a solid starting point for any Discord bot project.

---

## Features

- **Modular commands system**: Easily add, remove, or modify commands.
- **Event handling system**: Handles events like `ready`, `messageCreate`, and custom events.
- **Logger utility**: Simple logging for development and debugging.
- **Scalable structure**: Organized folders for commands, events, handlers, utilities, and configuration.
- **Ready for GitHub deployment**: Everything structured to push and share on GitHub.
- **Example commands included**: `ping` command as a starter.
- **Modern Discord.js v14 support**: Uses the latest Discord.js features and intents.
- **Flexible prefix system**: Change the prefix easily in the configuration file.
- **Error handling included**: Catches errors in commands and logs them.

## Install depedencies
```
npm install
```

## Configure your bot:

- Open config/config.json
- Replace "YOUR_BOT_TOKEN" with your Discord bot token
- Set your preferred prefix (default is !)

```
{
  "token": "YOUR_BOT_TOKEN",
  "prefix": "!"
}
```

## Usage

- Start the bot
```
npm start
```

## Usage command

- Test the ping command in Discord:
```
!ping
```

The bot will reply with Pong!, showing that it is online and working.
