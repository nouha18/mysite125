require('dotenv').config({ debug: process.env.DEBUG });

var express =  require('express'); //third-part module
var app = express();
var nodemailer = require('nodemailer');
var chalk = require('chalk');
var bodyparser = require('body-parser');
const dotenv = require('dotenv');
const PORT = 8080;
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

app.listen(PORT,function(){
  console.log(chalk.pink('server is running with',PORT));
});


