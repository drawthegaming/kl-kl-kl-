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
        
    const err1 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`<a:hypesqu:793475343595077705> **Bu Komudu Kullanmak İçin Bir Ses Kanalında Bulunmalısın.**`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`<a:hypesqu:793475343595077705> Şu Anda Bir Şarkı Oynamıyor.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("BLACK")
    .setDescription(`<a:hypesqu:793475343595077705> Başarıyla Ses Kanalından Çıktım.`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['dc'],
    permLevel: 0
};

exports.help = {
    name: 'disconnect',
    description: 'Botu Kanaldan Çıkartır ve Şarkıyı Kapatır.',
    usage: 'botçık'
};