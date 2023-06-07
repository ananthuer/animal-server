const express = require('express')
const session = require('express-session');
const swaggerUi = require('swagger-ui-express')
var passport = require('passport');
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const path = require('path')

app.use(cors())

app.use(express.static('public'))
app.use(express.static('public/admin'))

global.__basedir = __dirname;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
  })
);
app.use(express.json());

app.use(session({
  secret: 'qwerty',
  resave: true, 
  saveUninitialized:true
  })); // session secret
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport'); 


app.use(passport.initialize());




let mainJson = require('./swagger-main.json') 


mainJson["host"] = process.env.URL || "localhost:8000"



app.use("/api-docs/main",  swaggerUi.serveFiles(mainJson),swaggerUi.setup(mainJson));

app.use("/resumes", express.static("resumes"))

require('./routes')(app)


const db = require("./models");



const port = process.env.PORT || 8000;

db.sequelize.sync( ).then(() => {
  
  console.log('DB Connection established');

  app.listen(port, () =>{
      console.log(`server listening on port ${port}`);
  })
  
})
