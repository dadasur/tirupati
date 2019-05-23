const app = require('./app');
const http = require('http');

const port = process.env.PORT || 2000;  //saveing 3000 to env variable & using it OR default-hardcoded port number

const server = http.createServer(app);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/pra";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("--------------------------------------------------------------");
  console.log("Connected to Database! App is ready to use :)");
  console.log("--------------------------------------------------------------");
  db.close();
});

server.listen(port);