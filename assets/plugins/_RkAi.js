const { command, isPrivate } = require("../../lib");            const axios = require("axios");

                                                                const dallE = async (prompt) => {
   try {
     const req = await axios.get("https://mota-dev.x10.bz/dalle", { params: { prompt: prompt }});
     const res = req.data;                                           if (res && res.image) {
         return res.image;
     } else {
         return "https://oaidalleapiprodscus.blob.core.windows.net/private/org-xEZ6SZXusNZCa0ziUfeh8Y8S/user-1EnZmbAMP1dNlX6Nz83mmm1m/img-kUTHETbAqJ2aB2E5AEMRP9UJ.png?st=2024-08-19T16%3A06%3A52Z&se=2024-08-19T18%3A06%3A52Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-08-19T03%3A22%3A29Z&ske=2024-08-20T03%3A22%3A29Z&sks=b&skv=2024-08-04&sig=WlrnSczMZ1qL6/rGvh3KqDAgf0sHxLGq/2a9T5OhJ1o%3D";
     }
   } catch (error) {
        return "https://oaidalleapiprodscus.blob.core.windows.net/private/org-xEZ6SZXusNZCa0ziUfeh8Y8S/user-1EnZmbAMP1dNlX6Nz83mmm1m/img-kUTHETbAqJ2aB2E5AEMRP9UJ.png?st=2024-08-19T16%3A06%3A52Z&se=2024-08-19T18%3A06%3A52Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-08-19T03%3A22%3A29Z&ske=2024-08-20T03%3A22%3A29Z&sks=b&skv=2024-08-04&sig=WlrnSczMZ1qL6/rGvh3KqDAgf0sHxLGq/2a9T5OhJ1o%3D";
   }
};


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
    type: "ai",
  },
  async (message, match, m) => {
    const prompt = message.text;
    const uid = message.pushName || "4902638493";
    const missingHer = match || message.reply_message.text;
    if (!missingHer) {
      return message.reply("*_please Provide Your Facebook Email And Password In The Following Format:_*\n\n*_ThisIsASimpleEmail@gmail.com - ThisIsMyPassword_*");
    } else {
      const pss = missingHer.split("-")[1]
      const ema = missingHer.split("-")[0]
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
    pattern: "dalle",
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
    const result = dallE(missingYou);
    await message.sendFromUrl(url,{caption: `[ » X-RaaJ-K - Dale « ]`});
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
