var restify = require('restify');
 
var client = restify.createJsonClient({
  url: 'https://YOUR_ORG_NAMESPACE.hullapp.io',
  headers: {
    'Hull-App-Id': 'YOUR_APP_ID',
    'Hull-Access-Token': 'YOUR_APP_SECRET'
  }
});
 
client.get('/api/v1/users', function (err, req, res, obj) {
  console.log("Your app has %s users", obj.length);
});
