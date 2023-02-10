const dotenv = require('dotenv')
dotenv.config()
const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const client = require('twilio')(accountSid, authToken);
const myNumber = process.env.TWILIO_NUMBER;

client.messages
    .create({
        body: 'https://www.youtube.com/watch?v=YlKkFHViQ54',
        to: '+12062404700',
        from: '+12068097105'
    })
    .then(message => console.log(message.sid));