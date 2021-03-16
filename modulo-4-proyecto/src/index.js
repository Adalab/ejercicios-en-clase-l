const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');

const server = express();

server.use(cors());
server.use(express.json());

// set template engine middlewares
server.set('view engine', 'ejs');

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


// init and config data base
const db = new Database('./src/data/cards.db', {
  // this line log in console all data base queries
  verbose: console.log
});



const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

server.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const data = query.get(req.params.id);

  console.log(data);

  res.render('pages/card', data);
});

server.post('/card', (req, res) => {
  console.log(req.body);

  const response = {};

  if( !req.body.name ) {
    response.success = false;
    response.error = "Missing name parameter";
  }
  else if( !req.body.job ) {
    response.success = false;
    response.error = "Missing job parameter";
  }
  else if( !req.body.email ) {
    response.success = false;
    response.error = "Missing email parameter";
  }
  else if( !req.body.photo ) {
    response.success = false;
    response.error = "Missing photo parameter";
  }
  else {
    // All is fine
    // Save to db
    
    response.success = true;
    response.cardURL = "https://TODO-HA-IDO-BIEN.com"
  }


  res.json(response);
});


// not found error
server.get('*', (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});