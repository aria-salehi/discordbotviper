const config = require("./botconfig.json")
const {token} = require("./botconfig.json")
const {prefix} = require("./botconfig.json")
const Discord = require("discord.js")
const colors = require("./colors.json")
const fs = require('fs')

const client = new Discord.Client()

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () =>{
    console.log(`${client.user.tag} is now online`)


    client.user.setActivity(config.status,{ 
        type: "PLAYING",
        url: config.url

    })
});


client.login(token)


for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    
    if(command == 'help'){
        let helpEmbed = new Discord.MessageEmbed()
        .setColor(colors.red)
        .setAuthor("Help")
        .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
        for(const file of commandFiles){
            const helpCommand = require(`./commands/${file}`)
            if(helpCommand.description){
                helpEmbed.addField(`${prefix}${helpCommand.name}`, `${helpCommand.description}`, true)
            }
            else{
                helpEmbed.addField(`${prefix}${helpCommand.name}`, `hich tozihi baraye in command sabt nashode`)
            }
        }
        message.channel.send(helpEmbed)
    }
    else{
        try{ 
            client.commands.get(command).execute(client, message)
        }
        catch(err){
            errEmbed = new Discord.MessageEmbed()
            .setColor(colors.red)
            .setAuthor("Error")
            .setDescription("in commend be dorosti kar anjam nemidahad, lotfan ba developer ha darmian bezarid")
            .setFooter(client.user.username, client.user.displayAvatarURL())
            message.channel.send(errEmbed)
                .then(msg =>{
                    msg.delete({timeout: 5000})
            })

            console.log(err)
        }
    }
})