require('dotenv').config();
const d = require('discord.js');
const c = new d.Client()
const {Message} = require('discord.js')
const PREFIX = '.'
c.on('ready', () => {
    console.log(`Logged as ${c.user.id}`)
});


c.on('message', (msg) => {
    /**
     * @param {Message} msg
     */
    if(msg.content === PREFIX + 'help') return msg.channel.send('`!bc`')
    if(msg.content === PREFIX + 'bc') {
        msg.channel.send('ارسل رساله التبيها حت ارسلها للكل... انا جاي انتضرك')
        msg.channel.awaitMessages((m) => m.author.id === msg.author.id, {max: 1, time: 1200000, errors: ['time']}).then((co) => {
            msg.guild.members.cache.forEach(element => {
                element.send(`<@${element.id}>, \n` + co.first().content).catch(err => {})
            });
        }).catch(er => msg.channel.send('خلص الوقت'))
    }
})
c.login(process.env.TOKEN)
