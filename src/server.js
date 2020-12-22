require('dotenv').config({ debug: process.env.DEBUG });

var express =  require('express'); //third-part module
var app = express();
var nodemailer = require('nodemailer');
var chalk = require('chalk');
var bodyparser = require('body-parser');
const dotenv = require('dotenv');
const PORT = 8443;

const port = 8000;

// Crée un serveur HTTP
var cors = require('cors');
app.use(cors('*'));
app.use(bodyparser.json());

dotenv.config();

//app.use(express.static(process.cwd()+"/dist/ecommercesite/", { extensions: ['html'] }));
//app.use(express.static(process.cwd()+"/dist/ecommercesite/"));
const result = dotenv.config();

//process.cwd() : give the pull path of dist/index file of deployment
console.log(chalk.red(process.cwd()));

app.get("/", function(req, res){
   res.send("root");
  //res.sendFile(process.cwd()+"/dist/ecommercesite/index.html")
});
const hostname ="41.231.122.251"


// Démarre le serveur à l'adresse 127.0.0.1 sur le port 8000
// Affiche un message dès que le serveur commence à écouter les requêtes
app.listen(PORT,hostname, () => {
  console.log(`Le serveur tourne à l'adresse http://${hostname}:${PORT}/`);
})



