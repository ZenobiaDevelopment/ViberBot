import Viber from 'helerius';

import config from './config.json';

const client = new Viber();




client.once('ready', () => {
    console.log('The bot is ready :)');
})

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix)) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help') {
        if(args[0] === 'text') {
            client.sendMessage(config.name, 'Text is Text!', message.author);
        } else {
            client.sendMessage(config.name, 'Help is available!', message.author);
        }
    }
})



client.loadMessageEvent();
client.addWebhook(config.PORT);
client.login(config.token, config.webhook);
