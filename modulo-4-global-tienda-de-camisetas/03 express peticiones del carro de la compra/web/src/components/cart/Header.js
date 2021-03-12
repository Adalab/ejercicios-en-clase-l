import React from 'react';

const Header = () => {
  return (
    <thead className="table__header">
      <tr>
        <td className="table__item--product">Producto</td>
        <td className="table__item--price">Precio</td>
        <td className="table__item--units">Unidades</td>
        <td className="table__item--total">Total</td>
      </tr>
    </thead>
  );
};

export default Header;
