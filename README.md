# SMS-system
Experimenting with SMS software. Testing different ways to send, receive and relay SMS using node, express and ngrok.


## Twilio Markup Language (TwiML)
TwiML (the Twilio Markup Language) is a set of instructions you can use to tell Twilio what to do when you receive an incoming call or SMS.

My favorite commands:

``node
const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
response.say('Hello World');

console.log(response.toString());
``

message 

messages 

Messaging response 