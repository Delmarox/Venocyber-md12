//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Venoctrl/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtzcUd3ZXIwMXZLdHM0aDQ3ZWE1STJZRlpvRjI2UmhWclIwTlBKM3Brcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHBpV29FbkI4WEgvQ0t3c3JUcU9wcG5BSmpPM2JJaW5zcWRtZXhSVmpHaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS0pPY1FPWkJIejRESjAzTmNlb3NYb3o4Mis2SFE0L1BjZjRqM3ZaTm40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdXpsbjR3SENUWTVWVU95UFpENHRnV2V2SHJkM2xWYytNbEF1YVdIRkhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHT1JaQTZYZkRYb0IvSTB6UDV3TjJOWk5BdjlNZGlZQTM5TW1XSy9Ra1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im80c21ZZXFJMmszT2FaaUF4R1BCVzRjZU9SZGJJTXBZbWo0OUluT3R4Rk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVA2T0UyVytuWTZrVFRWbDVZa0NGc0QvcWtIMjVSQjE1a0xLS0o5UUJGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTlreXpHb3VuNEI0d0RQRW1RV0RzNDJEck4wTkdjTCtkMGJOcFg4TmxEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFZzJ1Rlo1OHBnTTg4UU1QdUtkTlRWQzdLMGVvRjg4YzVtdSttQlkxQUc4TDBDZXpDUFhaelg2N1lCYWdWQ1VqVXVOdDBTWlpnaVFrK0xRMFo4UGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJkUm1neUxjd2Y0YjdRWXZ0bkh5c1FENHVva2J2dnN4WWU4VDZFWFRpT1RrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc0Mjg2MjI2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQjQyODJCQTY2RTJBRDRDOUQ0RjQ2NDJENTI3NkU5NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTMxODM3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJR3VWSjdYRVJBQ1FwajczUElLWUh3IiwicGhvbmVJZCI6IjlmNDE1NjZmLWNkOTgtNGZjZS04ZDgzLTE4Y2E5MjlmMjQxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRzlKNWJwVlZ5WmxhR1BzZlF2aTJoZGxERWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlvQmh6Zk1iVTZ3RVhmdnJxdExoZ0U4YnM4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpRQzRNTlNTIiwibWUiOnsiaWQiOiIyNTU3NDI4NjIyNjY6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJWZW5vY3liZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016YTdkOEhFT3JUa0xZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InQ4RWFEd1I1V0RCeVBTYlpyZkszRlI2ay9pbXl2R243bE1DcDErOSt3R0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldBaEk1QWJiREtzRVRKcXh2RDIvaXYxaUROU0JNbFZhZkk2ZE9tY05JME5rN2ZuTFVqbzJSSkcyeWJZOHVJMjJ4Q2Y3d3lCVngyaGo5Z1VYakNiL0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVT01oS3JaaVFCTitDdkNHaUI3aGFCeU12NW0wcVVuY0twSDVWS3lqc09wSUpHM2ZJUldiTzJ0UXRzaGF5VkdmQTVLNEZkRGMyU2ZxV251cmEzNGhpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc0Mjg2MjI2Njo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJmQkdnOEVlVmd3Y2owbTJhM3l0eFVlcFA0cHNyeHArNVRBcWRmdmZzQmkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQxMzE4MzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2VzIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃^Tech Samrat",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
