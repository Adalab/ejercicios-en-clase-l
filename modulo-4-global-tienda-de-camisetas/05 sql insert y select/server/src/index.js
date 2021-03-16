const path = require('path');
const cors = require('cors');
const express = require('express');
const Database = require('better-sqlite3');

const cartData = require('./data/cart.json');
// const productsData = require('./data/products.json');
// const usersData = require('./data/users.json');

// Indicar qué base de datos vamos a usar con la ruta relativa a la raíz del servidor, a la carpeta server/
const db = new Database('./src/database.db', {
  // Con verbose le decimos que todas las queries que se ejecuten las muestre en la consola
  verbose: console.log
  // Así podemos comprobar qué queries estamos haciendo en todo momento
});

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
  // Por req.query.orderByPrice recibo si queremos ordenar ascendente o descendentemente los productos
  let query;
  if (req.query.orderByPrice === 'desc') {
    // Preparo la query
    query = db.prepare(`SELECT * FROM products ORDER BY price DESC`);
  } else {
    // Preparo la query
    query = db.prepare(`SELECT * FROM products ORDER BY price ASC`);
  }
  // Ejecutamos la query, como quiero muchos registros uso query.all()
  const products = query.all();

  // Si te fijas en el fichero products.json el id de los productos eran de tipo un string
  // En cambio, los ids que nos devuelve la base de datos son enteros
  // Si quiero que la web siga funcionando y reciba los mismos datos que antes de haber usado la base de datos
  // debo convertir los ids de los productos a un string antes de devolverlos al front
  for (const product of products) {
    product.id = String(product.id); // Este String() es igual que parseInt pero devuelve un string
  }

  // Respondo con un array de productos
  res.json(products);
});

app.post('/api/user/login', (req, res) => {
  // Preparo la query
  const query = db.prepare(`SELECT * FROM users WHERE email = ? AND password = ?`);
  // Ejecuto la query
  const userFound = query.get(req.body.email, req.body.password);

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

app.post('/api/user/signup', (req, res) => {
  const isValidEmailRegularExpresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (req.body.email === undefined || req.body.email === '') {
    // Compruebo si estoy recibiendo bien el email
    res.status(400).json({
      error: 'email-is-required',
      message: 'Email is required'
    });
  } else if (!isValidEmailRegularExpresion.test(req.body.email.toLowerCase())) {
    // Compruebo si el email es un email con una expresión regular
    res.status(400).json({
      error: 'email-is-invalid',
      message: 'Email is invalid'
    });
  } else if (req.body.password === undefined || req.body.password === '') {
    // Compruebo si recibo el password
    res.status(400).json({
      error: 'password-is-required',
      message: 'Password is required'
    });
  } else if (req.body.password.length < 8) {
    // Compruebo si el password tiene 8 o más caracteres
    res.status(400).json({
      error: 'password-is-too-short',
      message: 'Password is too short'
    });
  } else {
    // Si todas las comprobaciones anteriores han ido bien busco a la usuaria en la base de datos
    const queryUserFound = db.prepare(`SELECT * FROM users  WHERE email = ?`);
    const userFound = queryUserFound.get(req.body.email);
    if (userFound !== undefined) {
      // Si la usuaria existe respondo con un error
      res.status(400).json({
        error: 'repeated-user',
        message: 'There is already a user in our database with this email'
      });
    } else {
      // Si la usuaria no existe la creo en la tabla de users
      const queryCreateUser = db.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`);
      const createdUser = queryCreateUser.run(req.body.email, req.body.password);
      // Y respondo devolviendo el id del nuevo registro creado
      res.json({
        error: false,
        userId: createdUser.lastInsertRowid
      });
    }
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
