
// 'curl \
// -H "Authorization: Bearer 2JkAkEGiW112BDzcQf8jW77ezFP_7qk6WCjX3AzTnwfRBGVE5" \
// -H "Ngrok-Version: 2" \
// https://api.ngrok.com/endpoints'

// const endpoint = endpoint.public_url

// 'twilio phone-numbers:update "+12058583682" --sms-url="${endpoint}"'

// 'node server.js'

// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


var token = "2JkAkEGiW112BDzcQf8jW77ezFP_7qk6WCjX3AzTnwfRBGVE5"
// var url = "http://localhost:4040/api/tunnels"


// Example POST method implementation:
async function postTunnel(url = 'http://localhost:4040/POST/api/tunnels', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {
        "addr": addr,
        "proto": proto,
        "name": name
      },
      redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
  
  postData('http://localhost:4040/api/tunnels', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  


console.log(fetch('http://localhost:4040/api/tunnels'));
console.log("testing console log")