const express = require("express");
const cors = require("cors");
const path = require("path");
const Database = require("better-sqlite3");

// -------------------------
//   CONFIGURATION SECTION
// -------------------------

const server = express();

// Use cors (to avoid problems between this servar and localhost)
// Use json (all request will send their data in json format)

server.use(cors());
server.use(express.json());

// Set template engine middlewares (default path: /views)

server.set("view engine", "ejs");

// Set path for static files, like index.html, css, react javascript files, structural images

const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));



// -----------------
//   START SECTION
// -----------------

// Start server

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Start and config database

const db = new Database("./src/data/cards.db", {
  // this line log in console all data base queries
  verbose: console.log,
});



// ---------------------
//   ENDPOINTS SECTION
// ---------------------

// GET https://awesome-profile-cards-NNnnNN.herokuapp.com/card/<num>

// Search the card by the id param into the database and uses a template to generate and send the card.

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const data = query.get(req.params.id);

  res.render("pages/card", data);
});

// POST https://awesome-profile-cards-NNnnNN.herokuapp.com/card/

// Checks that all params are filled and inserts the data into the database.
// Sends a json object with the result.

server.post("/card", (req, res) => {
  const response = {};

  if (!req.body.name) {
    response.success = false;
    response.error = "Missing name parameter";
  } else if (!req.body.job) {
    response.success = false;
    response.error = "Missing job parameter";
  } else if (!req.body.email) {
    response.success = false;
    response.error = "Missing email parameter";
  } else if (!req.body.photo) {
    response.success = false;
    response.error = "Missing photo parameter";
  } else {
    // All is fine
    // Save to db

    try {
      const stmt = db.prepare('INSERT INTO cards (name, job, photo, phone, email, linkedin, github, palette) VALUES (?,?,?,?,?,?,?,?)');
      const result = stmt.run(req.body.name, req.body.job, req.body.photo, req.body.phone, req.body.email, req.body.linkedin, req.body.github, req.body.palette);

      response.success = true;

      if( req.host === 'localhost' ) {
        response.cardURL = "http://localhost:3000/card/"+result.lastInsertRowid;
      }
      else {
        response.cardURL = "https://awesome-profile-card-profes.herokuapp.com/card/"+result.lastInsertRowid;
      }
    }
    catch( dbError ) {
      // There was an error inserting into db
      console.log("DB Error: ", dbError);

      response.success = false;
      response.error = "Error while saving data.";
    }
    
  }

  res.json(response);
});



// ---------------------
//   NOT FOUND SECTION
// ---------------------

server.get("*", (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});