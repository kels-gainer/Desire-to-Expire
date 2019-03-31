const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let db = require("./models");

// Define API routes here
require("./routes/dates-route.js")(app);
require("./routes/items-route.js")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

db.UserItems.findAll().then(data => {
	// projects will be an array of all Project instances
	console.log(data);
})

db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, () => {
  		console.log(`🌎 ==> API server now on port ${PORT}!`);
	});
});
