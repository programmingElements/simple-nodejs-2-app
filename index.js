const dotenv = require("dotenv");
const express = require('express');
const app = express();
const router = express.Router();

dotenv.config({
  path: "./.env"
})

const DIR_PATH = __dirname + '/views/';
const PORT = process.env.PORT || 7001;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(DIR_PATH + 'index.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(DIR_PATH + 'sharks.html');
});

app.use(express.static(DIR_PATH));
app.use('/', router);

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}!`)
})