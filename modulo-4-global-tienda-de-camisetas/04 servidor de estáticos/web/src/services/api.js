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

const getCartProducts = userId => {
  return fetch(`http://localhost:3000/api/user/${userId}/cart`)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const sendCartProducts = (userId, userCartProducts) => {
  return fetch(`http://localhost:3000/api/user/${userId}/cart`, {
    method: 'PUT',
    body: JSON.stringify(userCartProducts),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const getShopProducts = () => {
  return fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

const exportObj = {
  getShopProducts: getShopProducts,
  getCartProducts: getCartProducts,
  sendCartProducts: sendCartProducts,
  sendLogin: sendLogin
};

export default exportObj;
