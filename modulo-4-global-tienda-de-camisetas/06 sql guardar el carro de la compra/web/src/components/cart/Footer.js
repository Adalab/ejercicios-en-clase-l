import React from 'react';

const Footer = props => {
  return (
    <tfoot className="table__footer">
      <tr>
        <td className="table__item--total-name" colSpan="3">
          Total
        </td>
        <td className="table__item--total-value">{props.total} €</td>
      </tr>
    </tfoot>
  );
};

export default Footer;
