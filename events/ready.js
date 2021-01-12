const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
      ".play 🎧 İstediğin şarkıyı çalar.",
      ".stop ▶️ Müziği durdurur.",
      ".resum ▶️ Müziği devam ettirir.",
      ".skip ⏭ Çalınan müziği geçer.",
      ".disconnect 🎧 Bot Kanaldan Ayrılır.",
  
  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random] );
        }, 5 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
};
