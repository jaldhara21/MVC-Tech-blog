// Dependencies
const express = require("express");
// Import express-session
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const sequelize = require("./config/connection");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Import the necessary module for Sequelize session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set up sessions
const sess = {
  secret: "Secret",
  // Configuration for the session cookie
  cookie: {
    // half an hour
    maxAge: 0.5 *  60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
