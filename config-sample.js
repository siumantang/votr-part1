var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https:/siumantang@cloudant.com';
config.couchdb.port = 443;
config.couchdb.username = 'siumantang';
config.couchdb.password = 'st022781';

config.twilio.sid = 'ACxxx';
config.twilio.key = 'yyy';
config.twilio.smsWebhook = 'https://nodeserver/vote/sms';
config.twilio.voiceWebhook = 'https://nodeserver/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;
