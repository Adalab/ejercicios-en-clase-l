import React from 'react';

class SpreadParams extends React.Component {
  add(...numbers) {
    console.log(numbers);
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }

  render() {
    return (
      <div className="border--medium">
        <h2>Spread con parámetros de funciones</h2>
        <p>Suma de dos números: {this.add(1, 2)}</p>
        <p>Suma de tres números: {this.add(1, 2, 3)}</p>
        <p>Suma de cuatro números: {this.add(1, 2, 3, 4)}</p>
      </div>
    );
  }
}

export default SpreadParams;
