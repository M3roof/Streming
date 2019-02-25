const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});







client.on('ready', async() => {
var server = "516364082127831040"; // ايدي السررفر
var channel = "541717138142920745";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('$fa')
    client.guilds.get(server).channels.get(channel).send('ان الله يحب المؤمنين')
    },305);
})




    client.on('message', message => {
        var prefix = "2";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
});







client.login(process.env.BOT_TOKEN);
