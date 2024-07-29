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


global.devs = "212691649677" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_55_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInB5dUtkOFFNUytqUXFLSk9lSW93NFFtT2YybkpxNXM0eDRUNWw5TWtyeEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjkxNjQ5Njc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2Rjg1Q0Q5RDc2NzRBQTBBRjAzOUZERTY4MUE3RUE5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNTQxNTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0lDZi14aXJRbHlCcDNKQWU1dGNkUVwiLFxuICBcInBob25lSWRcIjogXCJmNzFlOGY4NS1hNDk1LTRmZmEtODczNC0wMWY1OGRiZGJkNmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTQ5LFxuICAgICAgMTAsXG4gICAgICAyMTYsXG4gICAgICAxMDEsXG4gICAgICA1NCxcbiAgICAgIDIwNyxcbiAgICAgIDg1LFxuICAgICAgODEsXG4gICAgICAxODAsXG4gICAgICAxMzEsXG4gICAgICA1NCxcbiAgICAgIDE1LFxuICAgICAgMjI2LFxuICAgICAgNDgsXG4gICAgICAxMDcsXG4gICAgICAyMyxcbiAgICAgIDI1MixcbiAgICAgIDMsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMjIzLFxuICAgICAgMTg3LFxuICAgICAgMTMwLFxuICAgICAgNjksXG4gICAgICAzMCxcbiAgICAgIDIyOCxcbiAgICAgIDE5MSxcbiAgICAgIDgxLFxuICAgICAgMjA3LFxuICAgICAgOTAsXG4gICAgICA3NyxcbiAgICAgIDE1LFxuICAgICAgMTQxLFxuICAgICAgMjksXG4gICAgICA5OSxcbiAgICAgIDEyMixcbiAgICAgIDIxMyxcbiAgICAgIDE2MyxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091MTQ3Z0hFTDZHbnJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzFWQ1JLV29wYzQ2L3o0OU5tWnZpMkdKZHNEWWFRN0JIbWFibFYzeEgxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSS2RXUzFnbnNWblp0WEdtM05FK1JTb0dRbVdMb0h2LzcveGUrenVrckJrYisxM0w0OE9oSnBPM3BmSS9MM1YxR2VTN0xEZWxzZzVkRjZxYThHajRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlclhVcnByWUNwb0R3Tko1Z0FBQVVnbjR3MlZ1VkxkeXcxczA3VC9SS2V0U0FPRmVDTW1JbXlSN0cyekxJdTNhL1BzbDcxOUloSjFUaUJRTEFGa0VqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY5MTY0OTY3NzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI0NDA0MTgwNzcwOTk1OjE0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjkxNjQ5Njc3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNTQxNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONWtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU41ai5qc29uIjogIntcImtleURhdGFcIjpcImlqN0lDcEt4WFVCamdZTzNyLzIzL1g0MCt4ZjVnZ3dvZ3grZk5oSkhtN009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5ODExNzYxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjUzOTUxMzEyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjVrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWI3djkrVDlSTGxaQjdCL2FlZUhRYzNJY3BhcUsycXBMeWdINFBuWW5lND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk4MTE3NjExLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNTQxMjkzNzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ N1z4r - !』```", //*『sᴜʙsᴄʀɪʙᴇ • N1z4r - !』*\n youtube.com/@n1z4r.official"),
 
  author : process.env.PACK_AUTHER|| "N1z4r - !",
  packname: process.env.PACK_NAME || "+212691649677",
  botname : process.env.BOT_NAME  || "N1z4r - !",
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
