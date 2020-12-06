const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "developer",
    description: "in commend baraye neshan dadan developerha ast",
    execute(client ,message){
        let developerEmbed = new Discord.MessageEmbed()
        .setColor(colors.red)
        .setAuthor("developer")
        .setDescription("developer: 007")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(developerEmbed)
    }
}