const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "say",
    description: "in commend baraye shoma on chizi ro ke migid minevise",
    execute(client ,message){
        message.delete()
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0]
        let text = message.content.replace(`${cmd}`, '')
        let sayEmbed = new Discord.MessageEmbed()                                                       
        if(text && text !== ""){
            
            sayEmbed.setDescription(text)
            sayEmbed.setAuthor("Say")
            sayEmbed.setColor(colors.yellow)
            message.channel.send(sayEmbed)

        }
        else{

            sayEmbed.setDescription("Lotfan yek matn ham vared konid")
            sayEmbed.setAuthor("Say")
            sayEmbed.setColor(colors.yellow)
            message.channel.send(sayEmbed)
            .then(msg =>{
                msg.delete({timeout: 5000})

            })

        }
    }
}