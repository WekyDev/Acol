require('dotenv').config();

const Eris = require('eris');
const client = new Eris(`Bot ${process.env.TOKEN}`);

require('./utils/handlers')(client);

client.connect();