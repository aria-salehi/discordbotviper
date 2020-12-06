const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "server-info",
    description: "in command moshakhasat server ro neshon mide",
    execute(client ,message){
        let serverInfoEmbed = new Discord.MessageEmbed()
        serverInfoEmbed.setColor(colors.red)
        serverInfoEmbed.setAuthor("server Info")
        serverInfoEmbed.setThumbnail(message.guild.iconURL())
        serverInfoEmbed.addField("Server Name", `${message.guild.name}`)
        serverInfoEmbed.addField("Server Owner",`EBLIS`)
        serverInfoEmbed.addField("Member Count", `${message.guild.memberCount}`)
        serverInfoEmbed.addField("Region",`${message.guild.region}`)
        serverInfoEmbed.setFooter(`${client.user.username}`)
        message.channel.send(serverInfoEmbed)
    }
}