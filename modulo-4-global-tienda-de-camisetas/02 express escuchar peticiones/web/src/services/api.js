const getProducts = () => {
  return fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const sendLogin = userData => {
  return fetch('http://localhost:3000/api/user/login', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

export default {
  getProducts: getProducts,
  sendLogin: sendLogin
};
