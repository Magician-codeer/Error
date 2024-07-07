//𝑲𝑬𝑵𝑩𝑬𝑨𝑺𝑻_𝑴𝑫//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kennydegiant@gmail.com";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "𝑲𝒊𝒏𝒅𝒍𝒚 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒌𝒆𝒏𝒃𝒆𝒂𝒔𝒕 𝒕𝒉𝒆 𝒐𝒘𝒏𝒆𝒓";
global.gurl = process.env.GURL || "𝑲𝒊𝒏𝒅𝒍𝒚 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 @𝒌𝒆𝒏𝒃𝒆𝒂𝒔𝒕";
global.website = process.env.GURL || "0728511744";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254728511744,2547285511744";
global.sudo = process.env.SUDO_NUMBERS || "254728511744,2547285511744";
global.sudo = process.env.SUDO || "254728511744,2547285511744";
global.owner = process.env.OWNER_NUMBER || "254728511744,2547285511744";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "254728511744,2547285511744";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid08vcGZySUVxVHBwdXU1Ukt1NjFJZmxSZDRqSFEzM3NjaEM1VnJkcTVXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVYMmlEZEo5dEM5U3kzT0NiZ0xRdERpQXFYQkUxbk13R3FtUnh2cG0ybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSFNXNWNobk5CRm9Qd2t2QWNuR3pGSy81b1QwbHNuRGk0bUpDd0xSN2x3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJeldDbW9QYUUxUldiS2dYTWhiOGtrMTRRdmw3V0tJLytxT1JnYUlCeUJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOSHp2V3BDbmRlNDVuenhUN0c5OFVhZHBmVmRMSTg4VkhOM0U1YUJIMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRJRWdaVUZSMEt2cEdWMmY0RE1NSksxWm5ERHRkMGZYMXdjQ1Zvcnh0a2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lzczB2TkVLQjNxeFlRTjFUeis4Vk1wUnAvSXpNd1VFNzFVdkVMWnlYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVR5NVowYkcwTEFGWDFWQmhZRjVqREd5WVNScUdxZGhQcnVNWkovVDYxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhTVmNDelhVMGZEcDFzdkIxMTVxWERYa1plNTdEczBLNjVHdjQwZmd6VWUxVFIwODRuTlovTmVTNmttRXJPTGJDZ3RSMVdtRnpHaHhFTVlqdVUyaWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJ4K1NXdzY2RE5tOEV5dFhnNndJdFlpUWVJdUYzTEhWUTMvRkpBSENpc3dzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyTEF3VDRJR1RfeWtlSm1XWXBoS2ZRIiwicGhvbmVJZCI6ImU0ZWZiNmZiLTI1ZGItNDZkNS04Zjc0LTBmNTg1MTg4Y2ZhNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucjQ5V20wdS80UEVHak9OYXc2bWdGUWcxYkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzNPbzN5ejlxd3dtTnBWWnhpclNYZ1VLY2FJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI4NllSQk1BIiwibWUiOnsiaWQiOiIyNTQ3Mjg1MTE3NDQ6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B2Y3BMWUhFTE9ScWJRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNtR0xhUzJYV1VMNVVHT3RseWRwS2dPR3pBUi9INkR4VDhIcXI3dEJ5U009IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZqYTA2VmRuQlhmb1lQcGtYOUxFU013Q3NVRXg2N2FLVFNYZEhUSUR0ZURvazRtbC9Mc1hpamV0L1hJcFRiRlU4Ukpud1BGRnF0TzdNclllN1cwTER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNTFFOUnlRUFIzZjU5UW9UTno5Z3MrUFBDUGFUQi9LSlhuWTVjeE1TblBqVmtTK09DaDQyVWNGWENlQWlBN21xNzNDemQ0OFAzVElrVXcyMFF2MlFnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyODUxMTc0NDoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcGhpMmt0bDFsQytWQmpyWmNuYVNvRGhzd0VmeCtnOFUvQjZxKzdRY2tqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzM4NjIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlZeSJ9"
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝗠𝗜𝗚𝗛𝗧𝗬-𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝑲𝑬𝑵𝑩𝑬𝑨𝑺𝑻",
  packname: process.env.STICKER_NAME || "𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧",
  botname: process.env.BOT_NAME || "𝗠𝗜𝗚𝗛𝗧𝗬-𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝗠𝗜𝗚𝗛𝗧𝗬 𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
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


