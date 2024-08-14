const { command, isPrivate } = require("../../lib");
const axios = require("axios");
                                                           
command(
  {
    pattern: "raaj",
    fromMe: isPrivate,                                         
    desc: "Chat With Raaj AI",
    type: "ai",
  },
  async (message, match, m) => {
    const prompt = message.text;                               
    const uid = message.sender; // Assuming uid is the sender's ID

    if (!prompt) {
      return message.reply("*_Whats New ?_*");
    }

    try {
      const response = await axios.get("https://mota-dev.x10.bz/ai", {
        prompt: prompt,
        uid: uid,
      });

      if (response.data && response.data.reply) {
        message.reply(`*${response.data.reply}*`);
      } else {
        message.reply("*Sorry I Dont Have Answer To Your Message*\n\n" + response.data);
      }
    } catch (error) {
      console.error("*Error interacting with AI API:*", error.message);
      message.reply(`*_X-RaaJ-K_*\n\n${error.message}\n\n${prompt}`);
    }
  }
);
