const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  const twiml = new MessagingResponse();
  const media = twiml.message();

  if (req.body.Body == 'hello' || req.body.Body == 'Hello') {
    twiml.message('Hi, im a developer. Who are you?');
  } else if (req.body.Body == 'bye' || req.body.Body == 'mom') {
    twiml.message('Goodbye');
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server. The Robots are coming! Head for the hills!'
    );
    media.media(
      'https://upload.wikimedia.org/wikipedia/en/f/f6/Mechagodzilla_original_Showa_version.jpg' 
    );
  
  }

  res.type('text/xml').send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});