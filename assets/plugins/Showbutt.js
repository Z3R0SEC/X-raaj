const axios = require("axios");
const { command, isPrivate } = require("../../lib");

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
             return "There is a problem with our base API. Currently, we cannot read or understand your messages. We hope to get this fixed soon!";
       }
    } catch (err) {
       return err.message || "Sorry, we are currently unavailable to answer your questions.";
    }
};


command({
  pattern: ".",
  fromMe: isPrivate,
  dontAddCommandList: true,
},
  async (message, match, m) => {

  const user = message.pushName || "Mr/Mrs Anonymous";

  try {
    // Call the standbyAI function with the user and message body
    const aiRes = await standbyAI(user, match);

    let data = {
      jid: message.jid,
      button: [
        {
          type: "copy",
          params: {
            display_text: "Copy Response",
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
        text: aiRes // Use the result from standbyAI
      },
    };

    return await message.sendMessage(message.jid, data, {}, "interactive");

  } catch (error) {
    console.error("[Error]:", error);
  }
});
