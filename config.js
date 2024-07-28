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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_05_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJNWo2RUZucWZZeks3dWFZR01yaW5pUVJnZVI1OVJiR0cwMUwvcXcrY1hJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKWnBOYjJUVVFXNjNpUzRaQ25JQ3RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY4MDJlOWNkLTE4ZmEtNGZiMC05N2Q2LTFjY2Y2Y2NkMGJjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAyNDUsXG4gICAgICA4MyxcbiAgICAgIDEwNSxcbiAgICAgIDI0MSxcbiAgICAgIDIwMSxcbiAgICAgIDQyLFxuICAgICAgNTUsXG4gICAgICAxNTcsXG4gICAgICAxMTUsXG4gICAgICAxMCxcbiAgICAgIDE4NCxcbiAgICAgIDE0LFxuICAgICAgNixcbiAgICAgIDE4LFxuICAgICAgMSxcbiAgICAgIDExMyxcbiAgICAgIDI0NixcbiAgICAgIDQ5LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAyMTIsXG4gICAgICAxMjIsXG4gICAgICAxNTQsXG4gICAgICA1OCxcbiAgICAgIDEwNSxcbiAgICAgIDIzOCxcbiAgICAgIDEyMixcbiAgICAgIDIyMSxcbiAgICAgIDcxLFxuICAgICAgMTA0LFxuICAgICAgMTQxLFxuICAgICAgMjUxLFxuICAgICAgMjE1LFxuICAgICAgMTA1LFxuICAgICAgMjQ2LFxuICAgICAgMjQ4LFxuICAgICAgMjM0LFxuICAgICAgNzQsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xMTQ3Z0hFSVRvbUxVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzFWQ1JLV29wYzQ2L3o0OU5tWnZpMkdKZHNEWWFRN0JIbWFibFYzeEgxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEWHF1aWlEcW5jOUpEd0UrYVRTTmxVNG0xOHNWcnc5T3E0M254STZya1M0STJjeXNKcnhSRkJ3ZGw4VVo4Z3BWMmw5NjMxV0hmUXZBLzRtVk1Td1hDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3N0RqZUVpM2pVNWZPNzNObGNIa3E1ZitGeUd4bmNqdGd4ZHlhUGw5dmF5TUNLRmQzUytieU1xc0tDMXgwdzV6UTUybk9uSDNublVkTDQ3cjRhNm1Ddz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY5MTY0OTY3NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI0NDA0MTgwNzcwOTk1OjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjkxNjQ5Njc3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNjgzMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLbUJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUttQS5qc29uIjogIntcImtleURhdGFcIjpcInJYVTV4VEUvb0xIbUxXLzFSd3hzWHNNV2Ruc0wxUVp2YjBCbHlublRrZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5ODExNzYxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS21CLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUVFc2pRRUhMY3JSelNITjQ5elRTRmU5cXhmanM4c29tNUh0ZUlSQU1rUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk4MTE3NjEwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNjgyNzU2NDlcIn0iCn0="  // PUT your SESSION_ID 


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
