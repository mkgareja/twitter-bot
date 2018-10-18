const twitterApp = {
  consumer_key:         'KPlm2eUAWG0IKkAVDzhKTmXKO',
  consumer_secret:      'pKGETi7t49O9t59ymG8jtG5QZ3X3KWbJVlDzxFIlnsO6m0hEel',
  access_token:         '1052180188459687936-3capospcbGaLmdXDYsqNgQIiSe9X69',
  access_token_secret:  'gtFcyLSoYHJQAdVOe84UKeh7JL7sEkPSLSZ3IrSEdXAtz',
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
};

module.exports = {
  twitterApp,
  userName: process.env.USERNAME
};
