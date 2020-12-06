const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "setstatus",
    description: "in commend hanoz baraye set kardan status bot hast",
    execute(client ,message){
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0]
        let status = messageArry[1]
        if(!message.member.hasPermission("ADMINISTRATOR")){
            notPermission = new Discord.MessageEmbed()
            .setColor(colors.red)
            .setAuthor("needed permission")
            .setDescription(`shoma baraye estefade az in command niazmande permission **${command}** hastid`)
            message.channel.send(notPermission)
            return;
        }
        let statusText = message.content.replace(`${cmd} ${status}`,'')
        if(statusText == `${cmd} ${status}` || statusText == `${cmd}`){
            message.reply("lotfan matn mored nazar va status mored nazar ra vared konid")
        }
        else{
            let status2 = status.toLocaleUpperCase()
            if(status2 == "STREAMING" || status2 == "WATCHING" || status2 == "LISTENING" || status2 == "PLAYING"){
                client.user.setActivity(statusText, {
                    type: status2,
                    url: config.url
                }).then(message.reply("status ba movafaghiat set shod"))
            }
            else{
                message.reply("lotfan type dorost ra entekhab konid")
            }
        }
    }
}