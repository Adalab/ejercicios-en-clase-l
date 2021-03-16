// Este fichero maneja los datos del carro de la compra

// El carro de la compra es un array del tipo:
// [
//   {
//     "productId": "2",
//     "productUnits": 2
//   },
//   {
//     "productId": "1",
//     "productUnits": 4
//   }
// ]
// Que significa que la usuaria tiene 2 unidades del producto 2 y 4 unidades del producto 1

const incrementCartProduct = (cartProducts, cartProductId) => {
  // Busco el producto en el carro
  const cartProductFound = cartProducts.find(
    cartProduct => cartProduct.productId === cartProductId
  );
  if (cartProductFound) {
    // Si existe, le incremento 1 unidad
    cartProductFound.productUnits += 1;
  } else {
    // Si no exite, lo creo un nuevo objeto del tipo { "productId": "2", "productUnits": 2 }
    const newCartProduct = {
      productId: cartProductId,
      productUnits: 1
    };
    cartProducts.push(newCartProduct);
  }
  return cartProducts;
};

const decrementCartProduct = (cartProducts, cartProductId) => {
  // Estoy decrementando un producto que ya está en el carro, find me va a devolver un producto que seguro que existe
  const cartProductFound = cartProducts.find(product => product.productId === cartProductId);
  if (cartProductFound.productUnits > 1) {
    // Si las unidades son mayor de 1 las decremento
    cartProductFound.productUnits -= 1;
  } else {
    // Si hay 1 unidad borro el producto del carro de la compra
    const cartProductIndex = cartProducts.findIndex(product => product.productId === cartProductId);
    cartProducts.splice(cartProductIndex, 1);
  }
  return cartProducts;
};

const deleteCartProduct = (cartProducts, cartProductId) => {
  // Estoy borrando un producto que ya está en el carro, find me va a devolver un producto que seguro que existe
  const cartProductIndex = cartProducts.findIndex(product => product.productId === cartProductId);
  // Borro el producto del carro
  cartProducts.splice(cartProductIndex, 1);
  return cartProducts;
};

const composeCartProducts = (shopProducts, cartProducts) => {
  // shopProducts tiene datos del tipo:
  // [
  //   {
  //     "id": "1",
  //     "name": "Node JS",
  //     "price": 16,
  //     "imageUrl": "//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/node-js.jpg"
  //   }
  // ]

  // cartProducts tiene datos del tipo:
  // [
  //   {
  //     "productId": "1",
  //     "productUnits": 2
  //   }
  // ]

  // Esta función combina ambos arrays para retornar un array del tipo:
  // [
  //   {
  //     "id": "1",
  //     "name": "Node JS",
  //     "price": 16,
  //     "imageUrl": "//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/node-js.jpg",
  //     "productUnits": 2
  //   }
  // ]

  // Estos datos son los que paso al componente <Cart /> para que los pinte
  return cartProducts.map(cartProduct => {
    const showProduct = shopProducts.find(shopProduct => shopProduct.id === cartProduct.productId);
    return {
      ...showProduct,
      productUnits: cartProduct.productUnits
    };
  });
};

// export

const exportObj = {
  decrementCartProduct: decrementCartProduct,
  deleteCartProduct: deleteCartProduct,
  incrementCartProduct: incrementCartProduct,
  composeCartProducts: composeCartProducts
};

export default exportObj;
