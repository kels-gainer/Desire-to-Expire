const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// *****************
// the database
//const db = [];

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());


// log HTTP requests
app.use(morgan('combined'));
// **********

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

let db = require("./models");
// Define API routes here

//  ************
// get a specific FItem
app.get('/:id', (req, res) => {
  const FItem = db.filter(q => (q.id === parseInt(req.params.id)));
  if (FItem.length > 1) return res.status(500).send();
  if (FItem.length === 0) return res.status(404).send();
  res.send(FItem[0]);
});

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://desire2expire.auth0.com/.well-known/jwks.json'
  }),

  //validate the audience and the issuer
  audience: 'WgymmhrW4XsS23FurdObVghA11C0ghbQ',
  issuer: `https://desire2expire.auth0.com/`,
  algorithms: ['RS256']
});

// insert a new FItem
app.post('/', checkJwt, (req, res) => {
  const {title, description} = req.body;
  const newFItem = {
    id: db.length + 1,
    title,
    description,
    answers: [],
    author: req.user.name,
  };
  db.push(newFItem);
  res.status(200).send();
});

// insert a new answer to a FItem
app.post('/answer/:id', checkJwt, (req, res) => {
  const {answer} = req.body;

  const FItem = db.filter(q => (q.id === parseInt(req.params.id)));
  if (FItem.length > 1) return res.status(500).send();
  if (FItem.length === 0) return res.status(404).send();

  FItem[0].answers.push({
    answer,
    author: req.user.name,
  });

  res.status(200).send();
});

// start the server
// app.listen(8081, () => {
//   console.log('listening on port 8081');
// });
// *************

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, () => {
  		console.log(`🌎 ==> API server now on port ${PORT}!`);
	});
});
