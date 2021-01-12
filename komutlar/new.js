const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('» © Eternal | Yenilikler')
.setTimestamp()
.setDescription("<a:siyah:793466836456701982>Düşük Ping Bakımı Bitirildi\n<a:siyah:793466836456701982>Loop Özelliği Kodlanıyor\n<a:siyah:793466836456701982>Canlı Destek Komudu Kodlanıyor...\n<a:siyah:793466836456701982>Bug Fix Geldi.")
.setFooter('© Eternal  Müzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/471673535501303826/798125493270085632/standard_5.gif")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['n','new','müzik'], 
  permLevel: 0 
};

exports.help = {
  name: 'new',
  description: 'Güncellemeleri Gösterir.',
  usage: 'new'
};