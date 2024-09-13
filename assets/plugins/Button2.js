const { command, isPrivate } = require("../../lib");                  const config = require("../../config");
const { hostname, uptime, totalmem, freemem } = require("os");        const { fancy10, typewriter, tiny } = require("../../lib/fancy")

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


const cloth =  `╭───────────㋰
│╭──[ *STANDBY* ]──㋰
││ *_Hello ${message.pushName} :D_*
│╰──㋰
│
│╭──[ *Free Info* ]──㋰
││ *TIME: _${time}_*
││ *DATE: _${date}_*
││ *UPTIME: *${await formatTime(process.uptime().toFixed(0))}_*
│╰──㋰
╰───────────㋰\n`.toUpperCase();


command(
  {
    pattern: "hello",
    fromMe: isPrivate,
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
            title: "select option",
            sections: [
              {
                title: "Standby Clothing Assistance",
                rows: [
                  {
                    header: "Uptime Check",
                    title: "uptime",
                    description: "check How Long Bot Has Been Running",
                    id: "uptime",
                  },
                  {
                    header: "catalog",
                    title: "catalog",
                    description: "check out catalog",
                    id: "catalog",
                  },
                  {
                    header: "place your order",
                    title: "order",
                    description: "Pick and Place Your Order",
                    id: "order",
                  },
                  {
                    header: "products",
                    title: "products",
                    description: "see our product listing",
                    id: "product",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "follow us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
            merchant_url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
        {
          type: "copy",
          params: {
            display_text: "copy your JID",
            id: "123456789",
            copy_code: message.jid,
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Us",
            phone_number: "+27 83 449 3272",
          },
        },
      ],
      header: {
        title: "StandBy Clothing",
        subtitle: "© 2021",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021.",
      },
      body: {
        text: cloth,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);



command(
  {
    pattern: "hi",
    fromMe: isPrivate,
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
            title: "select option",
            sections: [
              {
                title: "Standby Clothing Assistance",
                rows: [
                  {
                    header: "Uptime Check",
                    title: "uptime",
                    description: "check How Long Bot Has Been Running",
                    id: "uptime",
                  },
                  {
                    header: "catalog",
                    title: "catalog",
                    description: "check out catalog",
                    id: "catalog",
                  },
                  {
                    header: "place your order",
                    title: "order",
                    description: "Pick and Place Your Order",
                    id: "order",
                  },
                  {
                    header: "products",
                    title: "products",
                    description: "see our product listing",
                    id: "product",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "follow us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
            merchant_url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
        {
          type: "copy",
          params: {
            display_text: "copy your JID",
            id: "123456789",
            copy_code: message.jid,
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Us",
            phone_number: "+27 83 449 3272",
          },
        },
      ],
      header: {
        title: "StandBy Clothing",
        subtitle: "© 2021",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021.",
      },
      body: {
        text: cloth,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);



command(
  {
    pattern: "hey",
    fromMe: isPrivate,
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
            title: "select option",
            sections: [
              {
                title: "Standby Clothing Assistance",
                rows: [
                  {
                    header: "Uptime Check",
                    title: "uptime",
                    description: "check How Long Bot Has Been Running",
                    id: "uptime",
                  },
                  {
                    header: "catalog",
                    title: "catalog",
                    description: "check out catalog",
                    id: "catalog",
                  },
                  {
                    header: "place your order",
                    title: "order",
                    description: "Pick and Place Your Order",
                    id: "order",
                  },
                  {
                    header: "products",
                    title: "products",
                    description: "see our product listing",
                    id: "product",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "follow us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
            merchant_url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
        {
          type: "copy",
          params: {
            display_text: "copy your JID",
            id: "123456789",
            copy_code: message.jid,
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Us",
            phone_number: "+27 83 449 3272",
          },
        },
      ],
      header: {
        title: "StandBy Clothing",
        subtitle: "© 2021",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021.",
      },
      body: {
        text: cloth,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);


command(
  {
    pattern: "unjani",
    fromMe: isPrivate,
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
            title: "select option",
            sections: [
              {
                title: "Standby Clothing Assistance",
                rows: [
                  {
                    header: "Uptime Check",
                    title: "uptime",
                    description: "check How Long Bot Has Been Running",
                    id: "uptime",
                  },
                  {
                    header: "catalog",
                    title: "catalog",
                    description: "check out catalog",
                    id: "catalog",
                  },
                  {
                    header: "place your order",
                    title: "order",
                    description: "Pick and Place Your Order",
                    id: "order",
                  },
                  {
                    header: "products",
                    title: "products",
                    description: "see our product listing",
                    id: "product",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "follow us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
            merchant_url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
        {
          type: "copy",
          params: {
            display_text: "copy your JID",
            id: "123456789",
            copy_code: message.jid,
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Us",
            phone_number: "+27 83 449 3272",
          },
        },
      ],
      header: {
        title: "StandBy Clothing",
        subtitle: "© 2021",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021.",
      },
      body: {
        text: cloth,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);


command(
  {
    pattern: "unjan",
    fromMe: isPrivate,
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
            title: "select option",
            sections: [
              {
                title: "Standby Clothing Assistance",
                rows: [
                  {
                    header: "Uptime Check",
                    title: "uptime",
                    description: "check How Long Bot Has Been Running",
                    id: "uptime",
                  },
                  {
                    header: "catalog",
                    title: "catalog",
                    description: "check out catalog",
                    id: "catalog",
                  },
                  {
                    header: "place your order",
                    title: "order",
                    description: "Pick and Place Your Order",
                    id: "order",
                  },
                  {
                    header: "products",
                    title: "products",
                    description: "see our product listing",
                    id: "product",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "follow us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
            merchant_url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
        {
          type: "copy",
          params: {
            display_text: "copy your JID",
            id: "123456789",
            copy_code: message.jid,
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Us",
            phone_number: "+27 83 449 3272",
          },
        },
      ],
      header: {
        title: "StandBy Clothing",
        subtitle: "© 2021",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021.",
      },
      body: {
        text: cloth,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);


command(
  {
    pattern: "unjn",
    fromMe: isPrivate,
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
            title: "select option",
            sections: [
              {
                title: "Standby Clothing Assistance",
                rows: [
                  {
                    header: "Uptime Check",
                    title: "uptime",
                    description: "check How Long Bot Has Been Running",
                    id: "uptime",
                  },
                  {
                    header: "catalog",
                    title: "catalog",
                    description: "check out catalog",
                    id: "catalog",
                  },
                  {
                    header: "place your order",
                    title: "order",
                    description: "Pick and Place Your Order",
                    id: "order",
                  },
                  {
                    header: "products",
                    title: "products",
                    description: "see our product listing",
                    id: "product",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "follow us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
            merchant_url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
        {
          type: "copy",
          params: {
            display_text: "copy your JID",
            id: "123456789",
            copy_code: message.jid,
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call Us",
            phone_number: "+27 83 449 3272",
          },
        },
      ],
      header: {
        title: "StandBy Clothing",
        subtitle: "© 2021",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021.",
      },
      body: {
        text: cloth,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);



command({
  pattern: "developer"
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
