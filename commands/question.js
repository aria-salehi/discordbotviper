const Discord = require('discord.js')
const config = require('../botconfig.json')
const colors = require('../colors.json')
const {imgURL} = require('../botconfig.json')
const command = "ADMINISTRATOR"
module.exports = {
    name: "question",
    description: "in commend soal haye jaleb va fun bat ro neshon mide",
    execute(client ,message){
        let pingEmbed = new Discord.MessageEmbed()
        .setColor(colors.green)
        .setAuthor("question")
        .setDescription("اول قصه ها که میگن یکی بود یکی نبود غیر از خدا هیچکس نبود خب اگه یکی بود چطور غیر از خدا هیچ کس نبود؟؟؟؟")
        .setFooter(client.user.username, client.user.displayAvatarURL())
         message.channel.send(pingEmbed)
    }
}