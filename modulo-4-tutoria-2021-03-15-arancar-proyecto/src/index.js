const cors = require('cors');
const express = require('express');

// SERVIDOR

// Configuro el servidor
const app = express();
app.use(express.json());
app.use(cors());

// Inicio la aplicación de express
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api

app.post('/user/:userId', (req, res) => {
  console.log('Query', req.query);
  console.log('Body', req.body);
  console.log('URL', req.params);
  console.log('Header', req.headers);

  res.json({
    result: true
  });
});

const cards = [];

app.post('/card', (req, res) => {
  req.body.palette = req.body.palette || 1;

  if (req.body.name === '' || req.body.name === undefined) {
    res.json({
      success: false,
      error: 'Mandatory fields: name'
    });
  } else if (req.body.job === '' || req.body.job === undefined) {
    res.json({
      success: false,
      error: 'Mandatory fields: job'
    });
  } else {
    const id = 'id-' + Math.random();
    const newCard = req.body;
    newCard.id = id;
    cards.push(newCard);
    console.log(cards);
    res.json({
      succes: true,
      cardURL: `http://localhost:3000/card/${id}`
    });
  }
});
