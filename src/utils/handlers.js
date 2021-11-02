const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);

module.exports = (client) => {
    const eventFiles = fs.readdirSync('./src/events/').filter((file) => file.endsWith('.js'));

	for (const file of eventFiles) {
		const event = require(`../events/${file}`);
		client.on(file.split('.')[0], event.bind(null, client));
	}

}