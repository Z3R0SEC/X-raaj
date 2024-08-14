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
    const uid = message.pushName || "4902638493";
    const missingYou = match || message.reply_message.text;
    if (!missingYou) {
      return message.reply("*_Whats New ?_*");
    }

    try {
      const dat = { prompt: prompt, uid: uid }
      const response = await axios.get("https://mota-dev.x10.bz/ai", {
        params: dat
      });

      if (response.data && response.data.reply) {
        message.reply(`${response.data.reply}`);
      } else {
        message.reply(`[»] Error: *${response.error || "RaaJ Api Error Please Contact Z3R0SEC"}`);
      }
    } catch (error) {
      console.error("*Error Happened:*", error.message);
      message.reply(`*_X-RaaJ-K_*\n\n${error.message}`);
    }
  }
);
