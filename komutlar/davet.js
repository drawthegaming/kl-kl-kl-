const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`<a:hypesqu:793475343595077705> Botumuzu Sunucunuza Ekleyin !`, `[Buraya Tıkla!](https://discord.com/oauth2/authorize?client_id=784037216300564501&scope=bot&permissions=8)\n \n -Eternal Music Bot Çok Kullanışlı Konforlo Düşük Pingli Bir Dicord Botudur.İyi Eğlenceler Dileriz.`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};