const InteractionBase = require('../../Structures/CommandBase');
module.exports = class PingInteraction extends InteractionBase {
	constructor(...args) {
		super(...args, {
			name: 'test',
			description: 'test',
		});
	}
	/**
   * @param {Interaction} interaction
   * @param {Client} client
   */
	async run(interaction) {
		async function buffer(url) {
			const axios = require('axios');
			const response = await axios.get(url, { responseType: 'arraybuffer' });
			return Buffer.from(response.data, 'utf-8');
		}
		const e = require('canvas')
		console.log(e)
	}
};