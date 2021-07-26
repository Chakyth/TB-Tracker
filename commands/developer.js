module.exports = {

name: 'developer',
description: 'Developer Command' ,
execute(message, prefix, client, guild) {
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
				.setTitle('TB Checklist')
				.setColor('#c219d8')
				.setDescription(
					'Bot made by ```! Dropi#1661```\n[Server Invite](https://discord.gg/QFk3ajN8Ka)'
				)
				.setFooter('Version 1.0', client.user.displayAvatarURL());
			//delete the Command
			message.delete({ timeout: 300 });
			//send the Message
			message.channel.send(embed);
			
}}