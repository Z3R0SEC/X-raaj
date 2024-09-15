const { command, isPrivate } = require("../../lib");
const axios = require("axios");

command(
  {
    pattern: "@standby",
    fromMe: isPrivate,
    desc: "Get AI response from Mota Dev",
    usage: "ai <text>",
    type: "tools",
    dontAddCommandList: true,
  },
  async (message, match) => {
    try {
      if (!match) {
        return await message.reply("Hello ✨😄 How Can I Help You!");
      }
      let response = await axios.get('https://mota-dev.x10.bz/thabani', {
        params: {
          uid: message.jid,
          prompt: match,
          name: message.pushName
        },
      });

      let aiResponse = response.data;

      let data = {
        jid: message.jid,
        button: [
          {
            type: "copy",
            params: {
              display_text: "Copy AI Response",
              id: "copy_ai_response",
              copy_code: aiResponse, // The AI response text to be copied
            },
          },
        ],
        header: {
          title: "AI Response",
          subtitle: "Here is what the AI has to say",
          hasMediaAttachment: false,
        },
        footer: {
          text: "Powered by Mota Dev",
        },
        body: {
          text: aiResponse,
        },
      };

      return await message.sendMessage(message.jid, data, {}, "interactive");

    } catch (error) {
      console.error("[Error]:", error);
      return await message.sendMessage(message.jid, "Failed to get AI response. Please try again later." + error);
    }
  }
);
