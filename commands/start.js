module.exports = {

name: 'start',
description: 'start Setup' ,

async execute(message, prefix, client, guild) {
const db = require('quick.db')
	     const args = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);
	
	
	
		  	let rolee = db.get(`role_${message.guild.id}`)
		let ro;
        if(!rolee){
          ro = 'h'
      } else {
         role = rolee;}
         


const Discord = require('discord.js')
var prole = db.fetch(`perms_${message.guild.id}`)
if(!prole) return message.channel.send('You have to setup the Permissions')
console.log('define')
var permsrole = prole.substr(3,18);
console.log('guildrole')



if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has(permsrole)) {











const saymsg = message.content.slice(Number(prefix.length) + 6)

if(!saymsg) return message.channel.send('Please provide a title like "P1 LS Geo TB"')











var role = message.guild.roles.cache.find(r => r.name === '✅ ground deployment');
if(!role)
message.guild.roles.create({
  data: {
    name: '✅ ground deployment',
    color: 'BLUE',
  }
})
var rolle = message.guild.roles.cache.find(r => r.name === '⚔️ fights');
if(!rolle)
message.guild.roles.create({
  data: {
    name: '⚔️ fights',
    color: 'BLUE',
  }
})



var rulle = message.guild.roles.cache.find(r => r.name === '✈️ Ship deployment');
if(!rulle)
message.guild.roles.create({
  data: {
    name: '✈️ Ship deployment',
    color: 'BLUE',
  }
})


var rille = message.guild.roles.cache.find(r => r.name === '👨‍👩‍👧‍👦 Platoons');
if(!rille)
message.guild.roles.create({
  data: {
    name: '👨‍👩‍👧‍👦 Platoons',
    color: 'BLUE',
  }
})



var grole = db.fetch(`role_${message.guild.id}`)
console.log('define')
var guildrole = grole.substr(3,18);
console.log('guildrole')

var subguildrole = grole.substr(0,3)
console.log('subguildrole')

if (subguildrole ==="<@&") {
	
	
await guild.members.fetch();
await message.guild.members.cache.forEach(member => {
if (member.roles.cache.has(guildrole)) {
var platoonrole = message.guild.roles.cache.find(r => r.name === '👨‍👩‍👧‍👦 Platoons');
member.roles.add(platoonrole)
var shiprole = message.guild.roles.cache.find(r => r.name === '✈️ Ship deployment');
member.roles.add(shiprole)
var fightrole = message.guild.roles.cache.find(r => r.name === '⚔️ fights');
member.roles.add(fightrole)
var groundrole = message.guild.roles.cache.find(r => r.name === '✅ ground deployment');
member.roles.add(groundrole)      	
                  	
                      	
                      }
})
}








	            let tchannel = db.fetch(`trackerchannel_${message.guild.id}`)


       
       var sChannel = message.guild.channels.cache.get(tchannel)








const guildrolle = db.fetch(`role_${message.guild.id}`)


if(!saymsg) return message.channel.send('Please provide a title like "P1 LS Geo TB"')
const embed = new Discord.MessageEmbed()

 .setTitle(saymsg)
 .setDescription(' Please proceed your TB tasks as per guild schedule')
 .setFooter('React if you have finished the Step: *platoons, ship deployment, fights, ground deployment*')

 sChannel.send(embed)
 


.then(msg => {
msg.react('👨‍👩‍👧‍👦')
msg.react('✈️')
msg.react('⚔️')
msg.react('✅')
})
sChannel.send(guildrolle)


      } else
{ return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms or the  <@&' + permsrole + '> Role')

  	
  
}


}}



