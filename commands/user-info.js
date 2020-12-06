const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "user-info",
    description: "in commend moshakhasat fard fo neshon mide",
    execute(client ,message){
        let userInfoEmbed = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
        if(userMention){
            userInfoEmbed.setColor(colors.red)
            userInfoEmbed.setAuthor("User Info")
            userInfoEmbed.addField("UserName", `${userMention.username}`)
            userInfoEmbed.addField("Tag", `${userMention.discriminator}`)
            userInfoEmbed.addField("Id", `${userMention.id}`)
            userInfoEmbed.setThumbnail(userMention.displayAvatarURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
            message.channel.send(userInfoEmbed)
        }
        else{
     
            userInfoEmbed.setColor(colors.red)
            userInfoEmbed.setAuthor("User Info")
            userInfoEmbed.addField("UserName", `${message.author.username}`)
            userInfoEmbed.addField("Tag", `${message.author.discriminator}`)
            userInfoEmbed.addField("Id", `${message.author.id}`)
            userInfoEmbed.setThumbnail(message.author.displayAvatarURL({format: "png" || "gif" || "jpg", dynamic: true, size: 1024}))
            message.channel.send(userInfoEmbed)
        } 
    }
}