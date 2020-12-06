const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "ann",
    description: "in commend baraye dadan Announce ba bat hast",
    execute(client ,message){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            notPermission = new Discord.MessageEmbed()
                    .setColor(colors.red)
                    .setAuthor("needed permission")
                    .setDescription(`shoma baraye estefade az in command niazmande permission **${command}** hastid`)
                    message.channel.send(notPermission)
            return;
        }
        message.delete()
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0]
        let text = message.content.replace(`${cmd}`, '')
        let annEmbed = new Discord.MessageEmbed()                                                       
        if(text && text !== ""){
            
            annEmbed.setDescription(text)
            annEmbed.setAuthor("Announcements")
            annEmbed.setColor(colors.yellow)
            message.channel.send("@everyone",annEmbed)

        }
        else{

            annEmbed.setDescription("Lotfan yek matn ham vared konid")
            annEmbed.setAuthor("Announcements Commend")
            annEmbed.setColor(colors.yellow)
            message.channel.send(annEmbed)
            .then(msg =>{
                msg.delete({timeout: 5000})

            })

        }
    }
}