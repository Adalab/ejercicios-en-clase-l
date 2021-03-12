const cors = require('cors');
const express = require('express');

const productsData = require('./data/products.json');
const usersData = require('./data/users.json');

// SERVER

// config server
const app = express();
app.use(express.json());

app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// API

app.get('/api/products', (req, res) => {
  // Cojo los productos y los devuelvo
  res.json(productsData);
});

app.post('/api/user/login', (req, res) => {
  // Cojo los datos que recibo desde el navegador que están en req.body.email y req.body.password
  // Con estos datos busco en el array de usuarios si el usuario existe
  const userFound = usersData.find(user => {
    return user.email === req.body.email && user.password === req.body.password;
  });

  if (userFound !== undefined) {
    // Si el usuario existe devuelvo el id del usuario
    res.json({
      error: false,
      userId: userFound.id
    });
  } else {
    // Si el usuario no existe devuelvo un error
    res.status(404).json({
      error: 'user-not-found',
      message: 'User not found'
    });
  }
});
