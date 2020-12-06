const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "server-ip",
    description: "in command baraye neshan dadan ip server ast",
    execute(client ,message){
        let adminEmbed = new Discord.MessageEmbed()
        .setColor(colors.yellow)
        .setAuthor("hanoz set nashode")
        message.channel.send(adminEmbed)
    }
}