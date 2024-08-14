const { command, isPrivate } = require("../../lib");
 
// Made with ❤ by Z3R0SEC
const {
    translate
  } = require('@vitalets/google-translate-api');
  const defaultLang = 'en'
  
  command({
       pattern: "translate",
       fromMe: isPrivate,  
       desc: "Google Translate",
       dontAddCommandList: true,
       type: "tools",
  
    },
    async (message, match, m) => {
      try{

        
        let args = match.split(" ");
let lang = args[0];
let text = args.slice(1).join(" ");
if (lang.length !== 2) {
  lang = defaultLang;
  text = args.join(" ");
}
if (!text && m.quoted && m.quoted.text) {
  text = m.quoted.text;
}
let result = await translate(text, {
  to: lang,
  autoCorrect: true
}).catch(() => null);
message.sendMessage(result.text);


    } catch (error) {
      console.error("[Error]:", error);
    }
    })
