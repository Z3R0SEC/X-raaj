const axios = require("axios");

const standbyAI = async (name, msg) => {
    try {
       const data = {
           uid: name,
           name: name,
           prompt: msg
       };

       const api = "https://mota-dev.x10.bz/standbyai"
       const req = await axios.get(api, { params: data });
       const res = req.data;

       if (res && res.reply) {
          return res.reply;
       } else if (res && res.error) {
             return res.error;
       } else {
             return "The is a Problem With Our Base API. Currently We Cannot Read Or Understand Your Messages We Hope To Get This Fixed Soon!";
       }
    } catch (err) {
       return err || "Sorry We Are Currently Unavailable To answer Your Questions";
    }
};


command({
  pattern: "ai",
  fromMe: isPrivate,
  dontAddCommandList: true,
},
  async (message, match, m) => {

  const user = message.pushName || "Mr/Mrs Anonymous";

try {
const aiRes = standbyAI
let data = {
  jid: message.jid,
  button: [
    {
      type: "copy",
      params: {
        display_text: "copy response",
        id: "copy",
        copy_code: aiRes,
      },
    },
    {
      type: "url",
      params: {
        display_text: "Donate",
        url: "https://pay.capitecbank.co.za/payme/VGJ7YN",
        merchant_url: "https://pay.capitecbank.co.za/payme/VGJ7YN",
      },
    },
  ],
  footer: {
    text: "    StandBy Clothing © 2021",
  },
  body: {
   text: await aiRes
  },
};



return await message.sendMessage(message.jid, data, {}, "interactive");

    } catch (error) {
      console.error("[Error]:", error);
    }
})
