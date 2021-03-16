const isDevEnviroment = process.env.NODE_ENV === 'development';
const apiUrl = isDevEnviroment ? '//localhost:3000' : '';

console.log('isDevEnviroment', isDevEnviroment);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('apiUrl', apiUrl);

const sendLogin = userData => {
  return fetch(`${apiUrl}/api/user/login`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const sendSignUp = userData => {
  console.log(userData);
  return fetch(`${apiUrl}/api/user/signup`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const getCartProducts = userId => {
  return fetch(`${apiUrl}/api/user/${userId}/cart`)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const sendCartProducts = (userId, userCartProducts) => {
  return fetch(`${apiUrl}/api/user/${userId}/cart`, {
    method: 'PUT',
    body: JSON.stringify(userCartProducts),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const getShopProducts = orderByPrice => {
  return fetch(`${apiUrl}/api/products?orderByPrice=${orderByPrice}`)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const exportObj = {
  getShopProducts: getShopProducts,
  getCartProducts: getCartProducts,
  sendCartProducts: sendCartProducts,
  sendLogin: sendLogin,
  sendSignUp: sendSignUp
};

export default exportObj;
