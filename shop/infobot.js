const infobot = (latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *I N F O  T E N T A N G  B O T*

🤖 *Nama Bot : ◄ 𝙍𝙚𝙣𝘽0𝙏 ►
👨‍💻 *Owner : @${ownerNumberrr.split('@')[0]}*
👨‍👨‍👧‍👦 *Group Chat : ${giid.length}*
👥 *Personal Chat : ${totalchat.length - giid.length}*
👨‍👩‍👧‍👧 *Total Chat : ${totalchat.length}*
🍃 *Speed : ${latensii.toFixed(4)} Second (s)* 
🌾 *Runtime : ${kyun(runtime)}*


ℒ⃝📲 *P H O N E  S T A T I S T I C*

🪀 *WhatsApp V : ${wa_version}*
🛑 *RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
📈 *MCC : ${mcc}*
📉 *MNC : ${mnc}*
📊 *OS Version : ${os_version}*
📫 *Merk Hp : ${device_manufacturer}*
📮 *Versi Hp : ${device_model}*


ℒ⃝👨‍💻 *I N F O  B O T  O W N E R*

⛎ Heroku : api.RenBotZ.herokuapp.com
♈ YouTube : https://youtube.com/channel/UChy1o7FRCEkt8ewAkFxq0HA
♉ Github : RenB0T.github.io
♊ Instagram : Tidak Di Publikasikan!!
♋ Tiktok : tiktok.com/@Desty_prsk
♌ Telegram : Tidak Di Publikasikan!!
♎ Twetter : Nataa040320
♏ WhatsApp : wa.me/+6285845823026?text=Hay+Owner+N-Athaa+B0T+:+)

 ▪▣❑ *Ingin Sewa B0T? Silahkan Hubungi Owner Di atas!!* ❑▣▪
`}

exports.infobot = infobot
 
