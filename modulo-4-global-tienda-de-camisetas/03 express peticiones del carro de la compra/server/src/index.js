const cors = require('cors');
const express = require('express');

const cartData = require('./data/cart.json');
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
  // Para ver qué pinta tienen estos datos abrir products.json

  // Cojo los productos del json y los devuelvo
  res.json(productsData);
});

app.post('/api/user/login', (req, res) => {
  // Para ver qué pinta tienen estos datos abrir users.json

  // Cojo los datos que recibo desde el navegador que están en req.body.email y req.body.password
  // Con estos datos busco en el array de usuarias si la usuaria existe
  const userFound = usersData.find(user => {
    return user.email === req.body.email && user.password === req.body.password;
  });

  if (userFound !== undefined) {
    // Si la usuaria existe devuelvo, el id de la usuaria
    res.json({
      error: false,
      userId: userFound.id
    });
  } else {
    // Si la usuaria no existe, devuelvo un error con el código HTTP 404
    res.status(404).json({
      error: 'user-not-found',
      message: 'User not found'
    });
  }
});

app.get('/api/user/:userId/cart', (req, res) => {
  // Para ver qué pinta tienen estos datos abrir cart.json

  // Cojo el userId de URL params
  const cartUserId = req.params.userId;
  // Busco en los carros de todos las usuarias su carro de la compra
  const userCartFound = cartData.find(cartUser => cartUser.userId === cartUserId);
  if (userCartFound) {
    // Si la usuaria tiene un carro, devuelvo sus productos
    res.json(userCartFound.products);
  } else {
    // Si la usuaria no tiene un carro, devuelvo un listado de productos vacío
    res.json([]);
  }
});

app.put('/api/user/:userId/cart', (req, res) => {
  // Para ver qué pinta tienen estos datos abrir cart.json

  // Cogo el carro de la usuaria del body de la petición
  const userCartProducts = req.body;
  // Cojo el userId de URL params
  const cartUserId = req.params.userId;
  // Busco en los carros de todos las usuarias su carro de la compra
  const userCartFound = cartData.find(cartUser => cartUser.userId === cartUserId);
  if (userCartFound) {
    // Si la usuaria tiene un carro, sobre escribo sus productos
    userCartFound.products = userCartProducts;
  } else {
    // Si la usuaria no tiene un carro, lo creo y lo añado al listado de carros de todas las usuarias
    cartData.push({
      userId: cartUserId,
      products: userCartProducts
    });
  }
  // Respondo con el carro de esta usuaria
  res.json(userCartProducts);
});
