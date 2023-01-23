const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
	// See other options here
	// https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
	// All partials are loaded automatically
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  loop = () => {
    setTimeout(() => {
        try {
          console.log("checking friend requests...")
          client.relationships.incomingCache.forEach((user) => {
              user.setFriend();
              user.setNote("auto accepted at "+new Date(new Date()).toISOString());
              setTimeout(() => {
                user.dmChannel
                    .send("hi, this message is sent automatically upon accepting your friend request!")
                    .then(msg => console.log("sent message to "+user.username+"#"+user.discriminator))
                    .catch(console.error);
              }, 2000);
            })
        } catch(error) {
          console.log(error)
        }
      loop()
    }, 1000*17);
  };
  loop();
})

client.login('ur token x');
