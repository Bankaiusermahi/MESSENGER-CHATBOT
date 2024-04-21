module.exports = {
  config: {
    name: 'unsend',
    aliases: ['uns'],
    version: '999999+',
    author: 'UPoL007',
    role: 0,
    category: 'system',
    shortDescription: {
      en: 'Unsend Message',
    }
  },
  onStart: async function ({ api, event, args, message }) {
    if (event.type !== 'message_reply') {
      return message.reply('Please reply to the message you want to unsend.');
    }
    const messageID = event.messageReply.messageID;
    try {
      await api.unsendMessage(messageID);
    } catch (error) {
      console.error(error);
      message.reply('❌ | Failed to unsend the message.');
    }
  }
};
