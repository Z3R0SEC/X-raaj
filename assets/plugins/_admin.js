const { command , sleep} = require("../../lib");
const axios = require("axios");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../database").Plugins;

command(
  {
    pattern: "install",
    fromMe: true,
    desc: "Installs External cmd",
    type: "admin",
  },
  async (message, match) => {
    if (!match)
      return await message.sendMessage(message.jid, "_please Include cmd git Url_");

    try {
      var url = new URL(match);
    } catch (e) {
      console.log(e);
      return await message.sendMessage(message.jid, "_This not a valid cmd url_");
    }

    if (url.host === "gist.github.com") {
      url.host = "gist.githubusercontent.com";
      url = url.toString() + "/raw";
    } else {
      url = url.toString();
    }

    var plugin_name;
    try {
      const { data, status } = await axios.get(url);
      if (status === 200) {
        var comand = data.match(/(?<=pattern:) ["'](.*?)["']/);
        plugin_name = comand[0].replace(/["']/g, "").trim().split(" ")[0];
        if (!plugin_name) {
          plugin_name = "__" + Math.random().toString(36).substring(8);
        }
        fs.writeFileSync(__dirname + "/" + plugin_name + ".js", data);
        try {
          require("./" + plugin_name);
        } catch (e) {
          fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
          return await message.sendMessage(
            message.jid,
            "Invalid cmd structure\n ```" + e + "```"
          );
        }

        await installPlugin(url, plugin_name);

        await message.sendMessage(
          message.jid,
          `_New cmd installed : ${plugin_name}_`
        );
      }
    } catch (error) {
      console.error(error);
      return await message.sendMessage(message.jid, "Failed to read cmd");
    }
  }
);

command(
  { pattern: "plugin", fromMe: true, desc: "plugin list", type: "admin" },
  async (message, match) => {
    var mesaj = "";
    var plugins = await PluginDB.findAll();
    if (plugins.length < 1) {
      return await message.sendMessage(
        message.jid,
        "_No External GIT Cmd Installed_"
      );
    } else {
      plugins.map((plugin) => {
        mesaj +=
          "```" +
          plugin.dataValues.name +
          "```: " +
          plugin.dataValues.url +
          "\n";
      });
      return await message.sendMessage(message.jid, mesaj);
    }
  }
);

command(
  {
    pattern: "remove",
    fromMe: true,
    desc: "Remove external plugins",
    type: "admin",
  },
  async (message, match) => {
    if (!match)
      return await message.sendMessage(message.jid, "_Need a cmd name to remove_");

    var plugin = await PluginDB.findAll({ where: { name: match } });

    if (plugin.length < 1) {
      return await message.sendMessage(message.jid, "_cmd name not found_");
    } else {
      await plugin[0].destroy();
      delete require.cache[require.resolve("./" + match + ".js")];
      fs.unlinkSync(__dirname + "/" + match + ".js");
      await message.sendMessage(message.jid, `cmd deleted ${match} deleted`);
      await message.sendMessage(message.jid, `_Restarting..._`);
      sleep(500)
      return process.send("reset")

    }
  }
);
