module.exports = {
name: 'setup-perms' ,
description: 'setup the perms by role' ,

execute(message, prefix, client, guild, args) {
const db = require('quick.db')	

      
   if (message.member.hasPermission('MANAGE_GUILD')) {
          let data = db.get(`perms_${message.guild.id}`)    
          
          let symbol = args.join(" ")
         if(!symbol) return message.channel.send("Please input a Role ")
 

          
         db.set(`perms_${message.guild.id}`, symbol)
         console.log('Set')
         message.channel.send(`${symbol}`)
        console.log('symbol')
                    
                    
                    
                    
                    
                    

 
                    } else { return message.channel.send('You have no Perms. You need [MANAGE_GUILD] Perms')

                      
 	
 }

	
	
	
	
}}