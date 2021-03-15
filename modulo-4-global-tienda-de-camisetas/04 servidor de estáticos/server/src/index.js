const path = require('path');
const cors = require('cors');
const express = require('express');

const cartData = require('./data/cart.json');
const productsData = require('./data/products.json');
const usersData = require('./data/users.json');

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

// MOTOR DE PLANTILLAS

// Configuro el motor de plantillas, le digo que voy a usar el motor ejs
app.set('view engine', 'ejs');

// Con este enpoint gestiono las peticiones GET a http://localhost:3000/billing.html
app.get('/billing.html', (req, res) => {
  // Tengo que pasar datos a la view billing
  // De dónde obtengo estos datos(base de datos, un JSON...) es otro problema
  const templateData = {
    userEmail: 'rita@gmail.com',
    cartTotal: 10
  };
  // En lo que se refiere a motor de plantillas lo importante es pasar un objeto con los datos que la plantilla debe usar
  res.render('billing', templateData);
});

// SERVIDOR DE ESTÁTICOS

// Configuro el servidor de estáticos
const staticServerPath = './public'; // Relativo a la raíz del proyecto del servidor
app.use(express.static(staticServerPath));

// // Configuro las páginas no encontradas
app.get('*', (req, res) => {
  // // Ruta relativa a este directorio de la página 404 no encontrada
  // const notFoundFileRelativePath = '../public/not-found.html';
  // // path.join me ayuda a encontrar la ruta que sendFile me pide, más info en https://nodejs.org/api/path.html
  // const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  // console.log(notFoundFileAbsolutePath);
  // // Puedo enviar un fichero HTML
  // res.status(404).sendFile(notFoundFileAbsolutePath);

  // // O puedo redireccionar a donde yo quiera
  res.redirect('/#/not-found');
});
