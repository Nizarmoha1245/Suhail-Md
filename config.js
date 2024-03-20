const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Essmara,Morocco."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.atchjj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va1qLxkDJ6H9u5cvlQ2m";
global.website= process.env.GURL|| "https://chat.whatsapp.com/F8EVWAXr72hAsciEgN9oB2" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/N1z4r---%E2%B5%A3-03-19" ; // SET LOGO FOR IMAGE 



global.devs = "212691649677" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212691649677";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "212691649677,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212691649677,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_12_03_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNE1GZVFxazVLOTd4TEh1bHVWVjRmTmt3ckRZVWwvaWZOVnhSNmg4TFgwZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZpMW1YTDduUEREbUZHWGRCNWcveUJSUHk4K0xZcHErc0hPZXRTY2RoeGM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibU43SlZQdzY3eWorc3ZBS3RVMmt6NDl4NEh6enBEK2JaWTlrdHlkMjFFdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJnR2UrZFV2WnRnNndQa3NDQ2FTUlorbi9yKzVmZG4xOUZLd29ZSzV2VjA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0JCNGhNNFpqVExvaURBY1lhSWFIZTc2d05FZFE4KzBHK3BoN0NRQmxWaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklBQ25xclBoMEpEaTNtVHpJcmhCdTZsdXdBWGR4OTZDamlneUFWeXpKMGc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHTFNVN1R1R3dUdjhoUDQ5bTd4K2NzU1czSDVQTGNZZXl2WUVoT2RoRzFnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMGwzc1MrYzVHM3dsN3pYRnlaZms3bnpCOWUvRnVtcnAxdDFBU3o5UXBDcz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsMDVJSzEyS1JrUWdGWm9XRjJhS3cwelZSQWU3Z3h3YUg2ajh2Qiswa0xyTGFLemV2L0F2YTdHMkpvMWhDd1ZVWW5aTjJxdXlCWjZMOTJuR0c1dmJpdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzcsXCJhZHZTZWNyZXRLZXlcIjpcInZjYnVIc2QvcHR2NWJQc2Z4dzZjeFZNUGUrSmV0TnVhdlAyVGVPK2ZGL0U9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJmRXZVaWYxRVJYcVp6Q3hleWRfQ1RnXCIsXCJwaG9uZUlkXCI6XCIyMzJlZjFjNC0wN2VjLTRlMWQtYTYzMy0wMzVkYTliOTdmYThcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkpBRnh3ZHlXVXdqeVpQR0FxNWlqbzFyMEJEOD1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVGRUaFBKWStEWUJneGVXeEFnZzV1THgyTWgwPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPVzE0N2dIRUlmdzZLOEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiNzFWQ1JLV29wYzQ2L3o0OU5tWnZpMkdKZHNEWWFRN0JIbWFibFYzeEgxST1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImQrRlZEZGhLTUFudzgvRk5FTmhIVzE5QVVMREV1SmxJaVBBSmtWNVdLTlZiamI3T0dPbkVNZkgyTCtsYU1RYXQ0MnQ2Z3licmNVSDQrNGIvVGpDNkJBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiVDRoR2NxQmJzeHVJZ25sNWlPek53ZDAzZ1NMS0RyVFFCNE9FQndOTWx0Zkd3Y2s2SGxzOGlKVkNNeHJkQ2dFWXV3a2ZYVFJUWGVCaTZNMkxXWUlHaXc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIxMjY5MTY0OTY3NzoyMUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMzM4MDE0MzQ5OTY5MTU6MjFAbGlkXCIsXCJuYW1lXCI6XCJOMXo0ciAtIOK1o1wifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIxMjY5MTY0OTY3NzoyMUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJlOVZRa1NscUtYT092OCtQVFptYjR0aGlYYkEyR2tPd1I1bW01VmQ4UjlTXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDg5NzE2MixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFNVGhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVGguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2WmNhNzU3b2ltOWpjYmRCQ3RJUHFSazkyQmVoVnZrWWV3YnFHK0Z3MWtvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTgxMTc2MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDg5NzE2NzYwMlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©N1z4r - ⵣ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ N1z4r - ⵣ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "N1z4r - ⵣ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "N1z4r - ⵣ",
  ownername:process.env.OWNER_NAME|| "N1z4r - ⵣ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "N1z4r",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
