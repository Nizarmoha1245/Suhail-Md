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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_41_03_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUxRSkl5bnJlM1Q2Nm1sN0NVazJuTmVhOWthQllKOUhlSHJzZmpsWktYQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjAvSjZMOEdrOFBLTlJYd2dhYWZocTVXR2VVREU3UldObGFTYVkrUktOeWM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0o0aGswVjJ6bnRkSVJtQ3cyNm1mUUpIemtzYVRiNmFoUTBHaklSM3RVVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZ0elhKSmpKcnUwTVFOTUZta0pDcXpNL09RYkIzWFJZcVVuMXpMcUZ5Uzg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUVB1aXVsQS9JcXdpeGZ0ZUg4d0N4OURiOFZWQi9hY0dkM0pDcEpRK2cxOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdVZjhRNTZXVEttVE1yQ2NIdWJ4VUN1Z214WDBWM0FEeE94Z2phQlBlRk09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLRXNuLzZRZUxTK213Z25BUlRFR3N2eGtqK2dmN28xRlVHRDdaUW1yUjNFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiN295dThkbW9CN2VUNHZTU204aFpMY0hWMzRSSGZWQkhlemx0N3NRRFVtcz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ6dWRUbnpINElLZFFmbmhReis1dDNGaWJIT3NOcVB0VGtPN2IzMlA1UkYra1hOOUhmSTdncWJ5ak43NXFoWTh0U2E4Y1ZGb1VTSmFtd215ZWF2Y0Zndz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjA5LFwiYWR2U2VjcmV0S2V5XCI6XCJWazh0S2JpYmxtL1FTQ0ZjNjhtTHRpMEp4bGhPb3FxVmhpN3EwVEFqMWtZPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiZnhhUGFkd2pUM0dYdnR1UXR2R05vZ1wiLFwicGhvbmVJZFwiOlwiN2M3MjIzYmUtMTRjZS00MGQ5LTgxYWUtOTJmY2I5YzI5MmY5XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLak1DNStDczlWdElKeEk1bjZrVEp3a0QyemM9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieGdlUS9DRU5KSjF0TVVJZVNMYmFTUlkwei9VPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkpNRkZHRUJHXCIsXCJtZVwiOntcImlkXCI6XCIyMTI2OTE2NDk2Nzc6MjlAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTMzODAxNDM0OTk2OTE1OjI5QGxpZFwiLFwibmFtZVwiOlwiTjF6NHIgLSDitaNcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ09hMTQ3Z0hFSktZa2JBR0dBWWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCI3MVZDUktXb3BjNDYvejQ5Tm1admkyR0pkc0RZYVE3QkhtYWJsVjN4SDFJPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiYmxYUFFUcEZZc2c5c2wwdmdJR2hKNmRkNFZhZ242RDNlYXc4Q2dyTHZwNCtIcjBmV3lHcmJRdHpNVmkvZUdsVkVzMTcvZEpuZkFRYXZabkhCV29LQWc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ2Z29LaG43TWlBK2lLaGZWTFNUWi9pT21RbW9Mc1JnUm5taUk4dG9CUUNNcUhLSld1WnpnY0hLcUtlRkNseHdLb2diOU96YmJxckw5Z1lsUXJ4VXFpQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjEyNjkxNjQ5Njc3OjI5QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmU5VlFrU2xxS1hPT3Y4K1BUWm1iNHRoaVhiQTJHa093UjVtbTVWZDhSOVNcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExNTU3NjU2fSIKfQ==" ;


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
 
