const Discord = require('discord.js');

const config = require('./config.json')

const client = new Discord.Client();

const prefix = '.';

const infEmbed = new Discord.MessageEmbed()
    .setColor('#f2f2f2')
    .setTitle('Info About Custom Welcomer Bot')
    .setDescription('This is a welcomer bot which gives \`Welcome Message\` in particular channel, \`Private DM\` and a \`Welcome Role\` to new Members added in Discord server.')
    .addFields({
        name: 'GitHub Repository',
        value: 'Link : https://github.com/Arcadegtech/welcomer-discord-bot',
        inline: false
    }, {
        name: 'Author of Repository',
        value: 'ArcadeGTech',
        inline: false
    }, {
        name: 'Discord Server of Author',
        value: 'Invite : https://discord.gg/UTHvWN3',
        inline: false
    }, {
        name: 'Disclaimer',
        value: 'This bot is distributed as Open source & free to use for Public. \nAuthor is not responsible for any action by Bot or Error in Code. \nAlthough bot is made with due care, its advised not to alter bot code to avoid any kind of loss.',
        inline: false
    })
    .setFooter(`Have a good day`)
    .setTimestamp()

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('New Members', { type: 'WATCHING' })
});

client.on('guildMemberAdd', member => {
    const welcomeRole = member.guild.roles.cache.get(config.welcomeroleid);
    const welcomechannel = member.guild.channels.cache.get(config.welcomechannelid)

    const durl = member.user.displayAvatarURL()

    const welcomemsg = `<@${member.user.id}> Welcome to our server, **${member.guild.name}**. \nPlease follow the server rules.`

    const wstaffEmbed = new Discord.MessageEmbed()
        .setColor('#85929E')
        .setTitle(`Hey, ${member.user.username}`)
        .setDescription(`<@${member.user.id}> Have a great time in **${member.guild.name}**. \nRespect everyone and follow server rules. \nNow we are ${member.guild.memberCount} members.`)
        .setImage(durl)
        .setFooter(`Account Created on [${member.user.createdAt}]`)

    member.send(welcomemsg)

    if (!welcomeRole) { return } else { member.roles.add(welcomeRole); }

    if (!welcomechannel) { return } else { welcomechannel.send(wstaffEmbed) }

});

client.on('message', message => {
    if (!message.guild && !message.author.bot && !message.content.startsWith(".info", ".checkbot") && ![".info", ".checkbot"].includes(message.content)) {
        if (message.content.startsWith('info')) {
            message.channel.send(infEmbed)
        } else {
            message.channel.send(`Sorry <@${message.author.id}>, I do not take private message. Use \`.info\` Command.`)
            message.channel.send(infEmbed)
        }
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'info') {
        message.author.send(infEmbed)
    } else if (command === 'checkbot') {
        const chckEmbed = new Discord.MessageEmbed()
            .setColor('#c2ff26')
            .setTitle('Welcomer Bot Status')
            .setDescription('Bot is Online')
            .addFields({
                name: 'Bot Online Since',
                value: message.client.readyAt
            }, {
                name: 'Bot Ping to Server',
                value: `${message.client.ws.ping}ms`
            })
            .setTimestamp()

        if (!message.guild) {
            message.channel.send(chckEmbed)
        } else if (!message.channel.permissionsFor(message.client.user).has('SEND_MESSAGES')) {
            message.author.send('I do not have send message permission in that channel.')
            message.author.send(chckEmbed)
        } else { message.channel.send(chckEmbed) }
    } else return;
});

client.login(config.token);