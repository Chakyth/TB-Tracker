module.exports = {

name: 'remind',
description: 'remind members' ,



execute(message, prefix, client, guild, args) {
	const Discord = require('discord.js')
	const db = require('quick.db')
var prole = db.fetch(`perms_${message.guild.id}`)
if(!prole) return message.channel.send('You have to setup the Permissions')
console.log('define')
var permsrole = prole.substr(3,18);
console.log('guildrole')



if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has(permsrole)) {
	            let rchannel = db.fetch(`remindchannel_${message.guild.id}`)


       
       	            	            let cchannel = db.fetch(`trackerchannel_${message.guild.id}`)


       
       var sChannel = message.guild.channels.cache.get(rchannel)
       console.log('search')

if(!args[0]) return message.channel.send('Syntax: ' + prefix + 'remind **@Role 13:00**\nExample: ' + prefix + 'remind **@platoonrole** Don’t forget to proceed your current TB task and submit the task in #tb-checklist until **13:00**')


sChannel.send(args[0])
const embed = new Discord.MessageEmbed()
.setTitle('REMINDER')
.setDescription('Don’t forget to proceed your current TB task and submit the task in <#' + cchannel +	            '> until ' + args[1])	
.setColor('ORANGE')
sChannel.send(embed)

} else { return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms or the <@&' + permsrole + '> Role')
	
}}}