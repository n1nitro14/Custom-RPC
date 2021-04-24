var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "ข้อความ",
assets : {
large_image : "ข้อความ",
large_text : "ข้อความ"
},
buttons : [{label : "ปุ่มที่1" , url : "ลิ้งปุ่ม1"},{label : "ปุ่มที่2",url : "ลิ้งปุ่ม2"}]
}
})
})
client.login({ clientId : "เลขไอดีบอท" }).catch(console.error);