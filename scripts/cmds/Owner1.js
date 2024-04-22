const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner2",
    aliases: ["info","mahi"],
    author: " MAHI ", 
    version: "2.0",
    cooldowns: 0,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝙇𝙤𝙖𝙙𝙞𝙣𝙜......";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: 'AIZEN MAHI',
          gender: 'MALE',
          hobby: ' COMPARING AND TOXICITY  ',
          relationship: 'THERE IS A GIRL I WANT TO MARRY IN FUTURE!',
          facebookLink: ' https://www.facebook.com/profile.php?id=100072881080249',
          bio: 'ONE DAY I'LL BECOME LIKE LORD AIZEN'
        };

        const videoUrl = 
["https://i.imgur.com/KzwgUW9.mp4",
"https://i.imgur.com/wwYdJKf.mp4",
"https://i.imgur.com/vcffz8j.mp4",
"https://i.imgur.com/azNOwTe.mp4",
"https://i.imgur.com/pVYJ25b.mp4",
"https://i.imgur.com/vHwbgQJ.mp4",
 ];
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
       𝕆𝕨𝕟𝕖𝕣 𝕀𝕟𝕗𝕠𝕣𝕞𝕒𝕥𝕚𝕠𝕟
««««««««««««««»»»»»»»»»»»»»»  
☆☆☆☆☆☆(◠‿◠)☆☆☆☆☆☆     
𝙉𝙖𝙢𝙚:${ownerInfo.name}          
𝙂𝙚𝙣𝙙𝙚𝙧:${ownerInfo.gender}
𝙃𝙤𝙗𝙗𝙮:${ownerInfo.hobby}
𝙍𝙚𝙡𝙚𝙖𝙩𝙞𝙤𝙣𝙨𝙝𝙞𝙥:${ownerInfo.relationship}
𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙡𝙞𝙣𝙠:${ownerInfo.facebookLink}
𝙂𝙤𝙖𝙡𝙨:${ownerInfo.bio} 
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();

        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };
