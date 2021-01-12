const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBTW0jnA023NBduCrds0Wz4PRwOOmDuQxI');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err0 = new RichEmbed()
      .setColor("BLACK")
      .setDescription(`<a:hypesqu:793475343595077705> **Bu Komudu Kullanmak İçin Bir Ses Kanalında Olmalısın.**`) 
    if (!voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`<a:hypesqu:793475343595077705> Şu Anda Bir Şarkı Çalmıyor.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`Başarıyla Geçildi!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
if(!message.member.hasPermission("KİCK_MEMBERS")) return message.reply(":x: **Bu Komudu Kullanmak İçin** `DJ` **Ya Da** `Manage Channels` **Sahip Olmalısın** (Bu Sayede Çalışabilir)");
};

exports.conf = {
    enabled: true,
    aliases: ['sk'],
    permLevel: 0
};

exports.help = {
    name: 'skip',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'geç'
};