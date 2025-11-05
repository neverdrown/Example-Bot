const fs = require('fs');
const { log } = require('../utils/logger');

module.exports = (client) => {
    client.commands = new Map();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
        log(`Loaded command: ${command.name}`);
    }
};
