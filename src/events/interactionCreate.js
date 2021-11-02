const Eris = require('eris');

module.exports = async (interaction) => {
    console.log(interaction.data)

    if(!(interaction instanceof Eris.CommandInteraction)) return;
    if(interaction.data.name === 'ping'){
        return interaction.createMessage('hi im alive')
    }
}