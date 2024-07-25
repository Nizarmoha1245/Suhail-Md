const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="tifawtissoudan@gmail.com"
global.location="Es-smara,Morocco."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.atchjj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VakNbsAG8l5Ekfno331h";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VakNbsAG8l5Ekfno331h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212691649677";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,212xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212691649677,212xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_48_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk00WkpjM3dnUkhzK0toUzlISHlWVFZjV2R2TThoNUhiQ0Z6ajlNcFNGaVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9WNHFobC13UW42YjN3NzgtWjNzVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmU3YTRhYmItOTQzMC00NzEzLTlhMWItZDdmMDZiNDczZTk0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDIwNCxcbiAgICAgIDk3LFxuICAgICAgMjA3LFxuICAgICAgNjAsXG4gICAgICAxNDAsXG4gICAgICAxODYsXG4gICAgICAxMjMsXG4gICAgICAxNzEsXG4gICAgICAyNDYsXG4gICAgICAyMDUsXG4gICAgICAyMTEsXG4gICAgICAxMDksXG4gICAgICAxNjksXG4gICAgICAyMDYsXG4gICAgICAxMTAsXG4gICAgICAxLFxuICAgICAgNTksXG4gICAgICAxOCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICA1OCxcbiAgICAgIDc0LFxuICAgICAgOTMsXG4gICAgICAyMTgsXG4gICAgICAyNDcsXG4gICAgICAxNDYsXG4gICAgICAyMDQsXG4gICAgICAyMzAsXG4gICAgICA1NSxcbiAgICAgIDcsXG4gICAgICAxMDQsXG4gICAgICAxNDIsXG4gICAgICAyOCxcbiAgICAgIDIyMSxcbiAgICAgIDIxNixcbiAgICAgIDIxNixcbiAgICAgIDIwOCxcbiAgICAgIDIxOSxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0RVhONEY0VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjkxNjQ5Njc3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNDQwNDE4MDc3MDk5NTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tMTQ3Z0hFTGJFaExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzFWQ1JLV29wYzQ2L3o0OU5tWnZpMkdKZHNEWWFRN0JIbWFibFYzeEgxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqSU40S09PamtRQkhaTXZIcXhoRFgxMlMySDZ1Umk3RUZONm04RWFValpOYkt0c1FsY2JlNEN5M2FpRnh5QTBmQkdMZ0ZJajc3czFBYnZwVEdrS2NBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4dmIvdFV6ZlFzTkRXKzNxcGhOMzNIazZnZVBBb2o5cWdVc01keE9ESzZDVy9jRTdKSm5KdXpPaU1RSE1kRXFQazJtdERobVkzM1l5bWdnSU81eU5qUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2OTE2NDk2Nzc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODM2MDkwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ N1z4r - ˚🎀✨』```", //*『sᴜʙsᴄʀɪʙᴇ • N1z4r - !』*\n youtube.com/@n1z4r.official"),
 
  author : process.env.PACK_AUTHER|| "N1z4r - !",
  packname: process.env.PACK_NAME || "N1z4r - ˚🎀✨",
  botname : process.env.BOT_NAME  || "N1z4r - ˚🎀✨",
  ownername:process.env.OWNER_NAME|| "N1z4r - !",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
