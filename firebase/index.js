
var admin = require("firebase-admin");

var serviceAccount = require("../config/helpdeskServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports=admin;