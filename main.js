const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='-'

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
      const command = require(`./commands/${file}`);

      client.commands.set(command.name, command);
}

client.once('ready', () =>{
      console.log('Melson is online!')
});

client.on('message', message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

      if(command === 'hello'){
            message.channel.send('Idiot!');
            client.commands.get('hello').execute(message, args);
      } else if (command == 'youtube'){
            message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            client.commands.get('youtube').execute(message, args);

      }
});





client.login('ODI0NTIxNzM1Nzc2MzcwNjk5.YFwltA.PkbbheX4R7Hlc8az9-a7iRzWN5E');