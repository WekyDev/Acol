const Event = require('../Structures/EventBase');

module.exports = class extends Event {
	constructor(...args) {
		super(...args, {
			once: true,
		});
	}
	async run() {
		this.client.utils.loadInteractions()
			.then(console.log('DONE interactions.'))
			.catch(console.error);

		console.log('BOT is ONLINE!');
	}
};