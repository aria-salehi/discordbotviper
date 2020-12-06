const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "avatar",
    description: "in commend baraye neshan dadan avatar ast",
    execute(client ,message){
        let userAvatar = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
        if(userMention){
            userAvatar.setColor(colors.red)
            userAvatar.setImage(userMention.displayAvatarURL())
            message.channel.send(userAvatar)  
        }
        else{
            userAvatar.setColor(colors.red)
            userAvatar.setImage(message.author.displayAvatarURL())
            message.channel.send(userAvatar)  
        }    
    }
}