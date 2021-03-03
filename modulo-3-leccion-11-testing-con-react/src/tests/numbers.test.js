// aquí no voy a testear nada de react
// directamente voy a testear un service que es código JS, sin código JSX ni código de React
import numbers from '../services/numbers';

describe('Testando módulo numbers', () => {
  test('check if getRandomNumber returns a number between 0 and 100', () => {
    // preparación: pido un número aleatorio entre 0 y 100
    const maxNumber = 100;
    // actuación: ejecuto la función a testear
    const randomNumber = numbers.getRandomNumber(maxNumber);
    // aserción: compruebo si el valor devuelto es mayor o igual que 0
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    // aserción: compruebo si el valor devuelto es menor o igual que 100
    expect(randomNumber).toBeLessThanOrEqual(100);
  });

  test('check if randomNumber returns a negative number', () => {
    // preparación: pido un número aleatorio entre 0 y 100
    const maxNumber = -100;
    // actuación: ejecuto la función a testear
    const randomNumber = numbers.getRandomNumber(maxNumber);
    // aserción: compruebo si el valor devuelto es mayor o igual que 0
    expect(randomNumber).toBeGreaterThanOrEqual(-100);
    // aserción: compruebo si el valor devuelto es menor o igual que 100
    expect(randomNumber).toBeLessThanOrEqual(0);
  });

  test('Check filterFavoriteSeries', () => {
    // preparación: pido un número aleatorio entre 0 y 100
    const series = [
      {
        name: 'Dexter',
        isFav: true
      },

      {
        name: 'Lost'
      }
    ];
    // actuación: ejecuto la función a testear
    const favoriteSeries = numbers.filterFavoriteSeries(series);
    // aserción: compruebo si el valor devuelto es mayor o igual que 0
    expect(favoriteSeries.length).toBe(1);
  });
});
