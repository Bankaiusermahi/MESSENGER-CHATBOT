module.exports = {
 config: {
 name: "mahi",
 version: "1.0",
 author: "leeza", // xue editz
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
 body: "ᴰᵒⁿ'ᵗ ᶜᵃˡˡ ˡᵒʳᵈ ᵃⁱᶻᵉⁿ ⁱᶠ ʰᵉ ⁱˢⁿ'ᵗ ʰᵉʳe !!",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/PLuem6i.jpeg")
 });
 }
 }
}
