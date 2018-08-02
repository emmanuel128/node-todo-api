var twilio = require('twilio');
const SID = 'ACd98f12b21d5b4a79ce2bae89e0fd542e';
const TOKEN = 'ccd8986a9fabe7e1f6b52270f9296d08';

var client = twilio(SID, TOKEN);

module.exports = { client };