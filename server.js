const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  const message = twiml.message();
  twiml.message('The Robots are coming! Head for the hills!');
  message.media(
    'https://upload.wikimedia.org/wikipedia/en/f/f6/Mechagodzilla_original_Showa_version.jpg' );

  res.type('text/xml').send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});