const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION","USER", "embeds"]});





    
    


const db = require('quick.db')
const embedColor = 0xe52b50;

const dbs = require("discord-buttons");
dbs(client);
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
const fs = require('fs')
const { readFile } = require('fs')





  




const prefix = 'tb!'




client.on('ready', () => {

//footer of Bot
console.log(`Logged in as ${client.user.tag}!`);
// Bot logged in
	

	
	const express = require('express')
	const app = express();
	const port = 3001
	;
	app.get('/', (req, res) => res.send('Hello World!'));
	app.listen(port, () =>
		console.log(`Example app listening at http://localhost:${port}`)
		//creating Website
	);
	

	
})
	client.on('message', async message => {
				  	let rolee = db.get(`role_${message.guild.id}`)
				  	
		let ro;
        if(!rolee){
          ro = 'h'
      } else {
         ro = rolee;}
         console.log('ro')
         		
         		
         		
         		let rchannel;
       
       

         

		 
		 
		 
	     const args = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/);
		const command = args.shift().toLowerCase();
		let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
const messages = [` On ${client.guilds.cache.size} Servers`, `Type ${prefix}faq`, `With ${membersCount} Members`]
let current = 1;






    
        client.user.setActivity(`Powered by VCL Coding`, {type: "PLAYING"})

        setInterval(() => {
            if(messages[current]){
            client.user.setActivity(messages[current] , {type: "PLAYING"})
            current++;
            }else{
            current = 0;
            client.user.setActivity(messages[current] , {type: "PLAYING"})
            }
    
        }, 10*1000)
    
		
		
 
        
				
				
				
				
				
				var guild = message.guild;
		var channel = message.channel;
		
		
		
	
	
	client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandfiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
 }
 
if(message.content.startsWith(prefix + 'setup-checklistchannel')){
    
    
var prole = db.fetch(`perms_${message.guild.id}`)
if(!prole) return message.channel.send('You have to setup the Permissions')
console.log('define')
var permsrole = prole.substr(3,18);
console.log('guildrole')



if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has(permsrole)) {    if (!args[0]) {
      let b = await db.fetch(`trackerchannnel_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**Checklist Channel Set In This Server Is \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Please Enter A Channel Name or ID To Set!**"
        );
    }
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Text Channel!**");

        try {
            let a = await db.fetch(`trackerchannel_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**This Channel is Already Set As Checklist Channel!**")
            } else {
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Checklist Channel Set!**")
                db.set(`trackerchannel_${message.guild.id}`, channel.id)

                message.channel.send(`** Checklist Channel Has Been Set Successfully in \`${channel.name}\`!**`)
            
            }	
            } catch {
        
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**")
            
        
            } }else { return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms or the "<@&' + permsrole + '>" Role ')
}
}




 
 
 
 if (message.content.startsWith(prefix + 'start')) {
await client.commands.get('start').execute(message, prefix, client, guild);

}


 if (message.content.startsWith(prefix + 'faq')) {
await client.commands.get('faq').execute(message, prefix, client, guild, args);}


if (message.content.startsWith(prefix + 'developer')) {
await client.commands.get('developer').execute(message, prefix, client, guild, args);}



 if (message.content.startsWith(prefix + 'setup-remindchannel')) {    
    
var prole = db.fetch(`perms_${message.guild.id}`)
if(!prole) return message.channel.send('You have to setup the Permissions')
console.log('define')
var permsrole = prole.substr(3,18);
console.log('guildrole')



if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has(permsrole)) {   
	if (!args[0]) {
      let b = await db.fetch(`remindchannel_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**Remind Channel Set In This Server Is \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Please Enter A Channel Name or ID To Set!**"
        );
    }
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Please Enter A Valid Text Channel!**");

        try {
            let a = await db.fetch(`remindchannel_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**This Channel is Already Set As Remind Channel!**")
            } else {
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Remind Channel Set!**")
                db.set(`remindchannel_${message.guild.id}`, channel.id)

                message.channel.send(`**Remind Channel Has Been Set Successfully in \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Error - `Missing Permissions Or Channel Is Not A Text Channel!`**")
            
        }
	
	
} else { return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms or the "<@&' + permsrole + '>" Role ')

}
}
if (message.content.startsWith(prefix + 'remind')) {
await client.commands.get('remind').execute(message, prefix, client, guild, args);

}



if (message.content.startsWith(prefix + 'setup-permissions')) {
await client.commands.get('setup-perms').execute(message, prefix, client, guild, args);

}

 if (message.content.startsWith(prefix + 'end')) {
 	var prole = db.fetch(`perms_${message.guild.id}`)
if(!prole) return message.channel.send('You have to setup the Permissions')
console.log('define')
var permsrole = prole.substr(3,18);
if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has(permsrole)) {   

var platoonrole = message.guild.roles.cache.find(r => r.name === '👨‍👩‍👧‍👦 Platoons');
if(!platoonrole) return;
platoonrole.delete()
var shiprole = message.guild.roles.cache.find(r => r.name === '✈️ Ship deployment');
if(!shiprole) return;
shiprole.delete()
var fightrole = message.guild.roles.cache.find(r => r.name === '⚔️ fights');
if(!fightrole) return;
fightrole.delete()

var groundrole = message.guild.roles.cache.find(r => r.name === '✅ ground deployment');
if(!groundrole) return;
groundrole.delete()

message.channel.send('This Phase End!')
} else { return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms or the "<@&' + permsrole + '>" Role')

}
}



if (message.content.startsWith(prefix + 'setup-role')) {
	var prole = db.fetch(`perms_${message.guild.id}`)
if(!prole) return message.channel.send('You have to setup the Permissions')
console.log('define')
var permsrole = prole.substr(3,18);
if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has(permsrole)) {   

      
          let data = db.get(`role_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) return message.channel.send("Please input a Role ")
 

          
         db.set(`role_${message.guild.id}`, symbol)
         console.log('Set')
         message.channel.send(`${symbol}`)
        console.log('symbol')
                    
                    
                    
                    
                    
                    

 
} else { return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms or the "<@&' + permsrole + '>"Role')

                           
 	

}
}
 
 
client.on('messageReactionAdd', async (reaction, user) => {
if (reaction.message.partial) await reaction.message.fetch();
if (reaction.partial) await reaction.fetch();
if (user.bot) return;			  
			  
			  
			  
			  	if(reaction.emoji.name === '👨‍👩‍👧‍👦' ){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '👨‍👩‍👧‍👦 Platoons');
if(!role)
message.guild.roles.create({
  data: {
    name: '👨‍👩‍👧‍👦 Platoons',
    color: 'BLUE',
  }
})

member.roles.remove(role)

}

	
if(reaction.emoji.name === '✈️' ){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '✈️ Ship deployment');
if(!role)
message.guild.roles.create({
  data: {
    name: '✈️ Ship deployment',
    color: 'BLUE',
  }
})

member.roles.remove(role)

}

	
if(reaction.emoji.name === '⚔️' ){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '⚔️ fights');
if(!role)
message.guild.roles.create({
  data: {
    name: '⚔️ fights',
    color: 'BLUE',
  }
})

member.roles.remove(role)

}
	
	
	

if(reaction.emoji.name === '✅'){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '✅ ground deployment');
if(!role)
message.guild.roles.create({
  data: {
    name: '✅ ground deployment',
    color: 'BLUE',
  }
})

member.roles.remove(role)

}	
	
	
	
		
	
	
	
	
	
})	



client.on('messageReactionRemove', async (reaction, user) => {
if (reaction.message.partial) await reaction.message.fetch();
if (reaction.partial) await reaction.fetch();
if (user.bot) return;			  
			  
			  
			  	if(reaction.emoji.name === '👨‍👩‍👧‍👦' ){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '👨‍👩‍👧‍👦 Platoons');
if(!role)
message.guild.roles.create({
  data: {
    name: '👨‍👩‍👧‍👦 Platoons',
    color: 'BLUE',
  }
})

member.roles.add(role)

}

	
if(reaction.emoji.name === '✈️' ){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '✈️ Ship deployment');
if(!role)
message.guild.roles.create({
  data: {
    name: '✈️ Ship deployment',
    color: 'BLUE',
  }
})

member.roles.add(role)

}

	
if(reaction.emoji.name === '⚔️' ){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '⚔️ fights');
if(!role)
message.guild.roles.create({
  data: {
    name: '⚔️ fights',
    color: 'BLUE',
  }
})

member.roles.add(role)

}
	
	
	

if(reaction.emoji.name === '✅'){
const member = reaction.message.guild.member(user)
const role = message.guild.roles.cache.find(r => r.name === '✅ ground deployment');
if(!role)
message.guild.roles.create({
  data: {
    name: '✅ ground deployment',
    color: 'BLUE',
  }
})

member.roles.add(role)

}	
	
	
	
		
	
	
	
	
	
})	







	})
	client.login('ODYxMjU0ODYzMjUzNDA1Njk2.YOHIGA.kpVhaQ5IByu_C5eg5GD3SucMGX4')

	
	