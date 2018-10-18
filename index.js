var Twit = require('twit')
var T = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL:true,
  };
  
  T.post('statuses/update', { status: 'hello world!1' }, function(err, data, response) {
    console.log(data)
  })
  