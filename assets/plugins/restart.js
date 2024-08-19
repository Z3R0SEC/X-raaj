const { command, isPrivate } = require("../../lib");
const axios = require("axios");
const choises = ["*_What's New ?_*","Yow, Need Help ?","*_Need Assistance ?_*","*Im Listening ...*"]
const chs = Math.floor(Math.random() * choises.length);
const rk = choises[chs];

command(
  {
    pattern: "restart",
    fromMe: isPrivate,
    desc: "restart bot",
    type: "admin",
  },

  async (message, match, m) => {
    const prompt = message.text;
    const uid = message.pushName || "4902638493";
    const missingYou = match || message.reply_message.text;
    const { exec } = require("child_process")
    await message.reply("*[»]* Thank You For Restarting Your RaaJ Bot");
    exec('pm2 restart all')
 }
);
