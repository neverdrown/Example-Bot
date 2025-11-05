const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config/config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Load handlers
require('./handlers/commandHandler')(client);
require('./handlers/eventHandler')(client);

client.login(token);
