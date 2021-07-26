module.exports = {

name: 'faq',
description: 'faq Command' ,

execute(message, prefix, client, guild) {
	
const Discord = require('discord.js')

const embed = new Discord.MessageEmbed()
.setTitle('FAQ')
.setColor('GREEN')
.setDescription('**1.Setup the Bot**\n' + prefix + 'setup-remindchannel\nDefine the remind Channel for Remind Command\n\n' + prefix + 'setup-checklistchannel\nSetup the Checklist Channel for Start Command(in this Channel will be send the checklist for the TB)\n\n' + prefix + 'setup-role\nSetup the Role who will get the roles the for checklist\n\n' + prefix + 'setup-permissions\nSetup a role who can use the bot\n\n\n**2. Start the TB**\n' + prefix + 'start\nCreates the Checklist for current TB Phase\n\n**IF THE BOT DOESN\'T GIVES THE ROLES YOU MUST EXECUTE  THE COMMAND AGAIN **\n\n\n**3. Remind**\n' + prefix + 'remind\nRemind your guildmates\n\n\n**4.Cleanup the Server**\n' + prefix + 'end\nDeletes the Checklist roles\n\n\n**5.Checkout the Developer**\n' + prefix + 'developer\n Shows the name of the Dev')
	.setFooter('VCL Coding', client.user.displayAvatarURL());

	message.channel.send(embed)

	
}}