# SMS-system
Experimenting with functions to be used in TexTur™ app. 


## Twilio Markup Language (TwiML)
TwiML (the Twilio Markup Language) is a set of instructions you can use to tell Twilio what to do when you receive an incoming call or SMS.

### Code cheatsheet:
> **⚠ Note** : TwiML elements (verbs and nouns) have case-sensitive names. For example, using <say> instead of <Say> will result in an error. Attribute names are also case sensitive and camelCased.
```twiml
<Say> — Read text to the caller
<Play> — Play an audio file for the caller
<Dial> — Add another party to the call
<Record> — Record the caller's voice
<Gather> — Collect digits the caller types on their keypad
```

<Say> "Hello World" to an inbound caller:
```javascript
const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
response.say('Hello World');

console.log(response.toString());
```
Twiml Response:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
     <Say>Hello World</Say>
</Response>
```


message 

messages 

Messaging response 
