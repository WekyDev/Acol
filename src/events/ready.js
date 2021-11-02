module.exports = (client) => {
    console.log('BOT is ONLINE!');
    (() => {
        client.createGuildCommand('881813009876520980', {
        name: 'test',
        description: 'a ping cmd',
        type: 1,
    })
    .then(() => console.log('Command created.'))
    .catch(console.error);
    })()
}