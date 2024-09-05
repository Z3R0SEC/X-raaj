const { command, isPrivate } = require("../../lib");
const config = require("../../config");
const { hostname, uptime, totalmem, freemem } = require("os");
const { fancy10, typewriter, tiny } = require("../../lib/fancy")

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "Invalid input please restart";
  }

  const months = Math.floor(seconds / (30 * 24 * 60 * 60));
  seconds -= months * 30 * 24 * 60 * 60;

  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * 24 * 60 * 60;

  const hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * 60 * 60;

  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  const timeArray = [];

  if (months > 0) {
    timeArray.push(months + (months === 1 ? " month" : " months"));
  }
  if (days > 0) {
    timeArray.push(days + (days === 1 ? " day" : " days"));
  }
  if (hours > 0) {
    timeArray.push(hours + (hours === 1 ? " hour" : " hours"));
  }
  if (minutes > 0) {
    timeArray.push(minutes + (minutes === 1 ? " minute" : " minutes"));
  }
  if (seconds > 0) {
    timeArray.push(seconds + (seconds === 1 ? " second" : " seconds"));
  }

  return timeArray.join(", ");
}
command(
  {
    pattern: "hello",
    fromMe: true,
    desc: "send a button message",
    usage: "hello",
    type: "tools",
    dontAddCommandList: true,
  },
  async (message, match, m) => {
    let data = {
      jid: message.jid,
      button: [
        {
          type: "list",
          params: {
            title: "Z3R0SEC",
            sections: [
              {
                title: "X-RaaJ-K",
                rows: [
                  {
                    header: "X-RaaJ-K",
                    title: "Button",
                    description: "Donate Us",
                    id: "cmd",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "reply",
          params: {
            display_text: "MENU",
            id: "menu",
          },
        },
        {
          type: "url",
          params: {
            display_text: "Please Donate",
            url: "https://pay.capitecbank.co.za/payme/VGJ7YN",
            merchant_url: "https://pay.capitecbank.co.za/payme/VGJ7YN",
          },
        },
        {
          type: "address",
          params: {
            display_text: "4 Festina Road Delville",
            id: "message",
          },
        },
        {
          type: "location",
          params: {},
        },
        {
          type: "copy",
          params: {
            display_text: "copy",
            id: "123456789",
            copy_code: "message",
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Me",
            phone_number: "27847611848",
          },
        },
      ],
      header: {
        title: "X-RaaJ-K",
        subtitle: "Whatsapp Version",
        hasMediaAttachment: false,
      },
      footer: {
        text: "Interactive Native Flow Message",
      },
      body: {
        text: "Interactive Message",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);



command({
  pattern: "help"
  , fromMe: isPrivate,
   dontAddCommandList: true
, }
, async (message, match, m) => {


  try{

  let [date, time] = new Date()
      .toLocaleString("en-ZA", {
          timeZone: "Africa/Johannesburg"
      })
      .split(",");

let fin =  `╭───────────㋰
│╭──[ *${config.BOT_NAME}* ]──㋰
││USER »  ${message.pushName}
││NUMBER »  ${m.sender.split("@")[0]}
││WORKTYPE » ${config.WORK_TYPE} BOT
│╰──㋰
│
│╭──[ *BOT INFO*]──㋰
││BOTNAME : ${config.BOT_NAME}
││TIME : ${time}
││DATE : ${date}
││OWNER : ${config.OWNER_NAME}
││PREFIX : No Prefix
││HOSTNAME : ${hostname().split("-")[0]}
││UPTIME : ${await formatTime(process.uptime().toFixed(0))}
│╰──㋰
╰───────────㋰\n`.toUpperCase();

let data = {
  jid: message.jid,
  button: [
    {
      type: "reply",
      params: {
        display_text: "MENU",
        id: "menu",
      },
    },
    {
      type: "reply",
      params: {
        display_text: "Command List",
        id: "list",
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
    text: "[ » X-RāāJ-K « ]",
  },
  body: {
   text: await fin
  },
};



return await message.sendMessage(message.jid, data, {}, "interactive");

    } catch (error) {
      console.error("[Error]:", error);
    }
})
