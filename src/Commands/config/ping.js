const InteractionBase = require('../../Structures/CommandBase');
module.exports = class PingInteraction extends InteractionBase {
	constructor(...args) {
		super(...args, {
			name: 'ping',
			description: 'Check my ping!',
		});
	}
	/**
   * @param {Interaction} interaction
   */
	async run(interaction) {
		return interaction.createMessage('hi');
	}
};