module.exports = {
 config: {
 name: "mahi",
 version: "1.0",
 author: "mahi", // xue editz
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "mahi") {
 return message.reply({
 body: "𝙳𝚘𝚗'𝚝 𝚌𝚊𝚕𝚕 𝚕𝚘𝚛𝚍 𝚊𝚒𝚣𝚎𝚗 𝚒𝚏 𝚑𝚎 𝚒𝚜𝚗'𝚝 𝚑𝚎𝚛𝚎 !!",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/3drfzRj.mp4")
 });
 }
 }
}
