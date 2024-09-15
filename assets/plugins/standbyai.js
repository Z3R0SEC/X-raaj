const { command, isPrivate } = require("../../lib");

command(
  {
    pattern: "hey",
    fromMe: isPrivate,
    desc: "Show promotion with buttons",
    usage: "hello",
    type: "hey",
    dontAddCommandList: true,
  },
  async (message) => {
    let data = {
      jid: message.jid,
      button: [
        {
          type: "list",
          params: {
            title: "Promotions",
            sections: [
              {
                title: "Our Products",
                rows: [
                  {
                    header: "Your Favorite",
                    title: "hoodie",
                    description: "Check out this amazing product!",
                    id: "product1",
                  },
                  {
                    header: "Your Favorite",
                    title: "T-shirt",
                    description: "Don't miss our special offer!",
                    id: "promo1",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "url",
          params: {
            display_text: "Follow Us",
            url: "https://www.facebook.com/profile.php?id=100077631307664",
          },
        },
      ],
      header: {
        title: `hello ${message.pushName}`,
        subtitle: "Check out our latest Standby offers",
        hasMediaAttachment: false,
      },
      footer: {
        text: "StandBy Clothing © 2021 All Right Reserved",
      },
      body: {
        text: "Welcome To StandBy Clothing",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);
