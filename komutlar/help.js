const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('» © Eternal | Gelişmiş Yardım')
.setTimestamp()
.setDescription("<a:siyah:793466836456701982>**.play**:Belirttiğiniz Müziği Çalar \n<a:pembe:793466845176791040>**.dc**:Bot Sesden Çıkar.\n <a:krmz:793466848938164285>**.stop**:Müziği Durdurursunuz.\n<a:mor:793466845381525524>**.resum**:Müziği Devam Ettirirsiniz.\n\n<a:hypesqu:793475343595077705>**.istatistik**:Botumuzun İstatistiklerini Görürsünüz.\n<a:hypesqu:793475343595077705>**.davet**:Botumuzu Sunucunuza Davet Edersiniz.\n<a:hypesqu:793475343595077705>**.new**:Güncellemeler İle Yeni Gelen Özellikleri Görürsünüz.")
.setFooter('© Eternal  Müzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setImage("https://cdn.discordapp.com/attachments/471673535501303826/798125493270085632/standard_5.gif")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','mz'], 
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};