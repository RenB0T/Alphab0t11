const infobot = (latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *B O T  S T A T I S T I C*

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


ℒ⃝👨‍💻 *C O N N E C T  W I T H  M E*

⛎ Api : api.alphabot.herokuapp.com
♈ YouTube : https://youtube.com/channel/UChy1o7FRCEkt8ewAkFxq0HA
♉ Github : RenB0T.github.io
♊ Instagram : instagram.com/zeeoneofc
♋ Tiktok : tiktok.com/@zeeoneofc
♌ Telegram : t.me/zeeoneofc
♎ Ch Telegram : t.me/zeeone_ofc
♏ WhatsApp : wa.me/+6285845823026
`}

exports.infobot = infobot
 
