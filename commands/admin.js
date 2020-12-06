const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "admin",
    description: "in command baraye neshan dadan admin ha ast",
    execute(client ,message){
        let adminEmbed = new Discord.MessageEmbed()
        .setColor(colors.red)
        .setAuthor("admin")
        .setDescription("admin: rabin hood , yousef")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(adminEmbed)
    }
}