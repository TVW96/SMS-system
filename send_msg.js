const dotenv = require('dotenv')
dotenv.config()
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const client = require('twilio')(accountSid, authToken);


client.messages
    .create({
        body: 'Hello from Node, again.',
        to: '+12062404700',
        from: '+12058583682'
    })
    .then(message => console.log(message.sid));