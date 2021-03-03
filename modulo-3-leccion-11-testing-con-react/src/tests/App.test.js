// en este test voy a testear cosas de react por ello necesito importar render y screen que me ayudan a trabajar con componentes de react
import { render, screen } from '@testing-library/react';
// además importo el componente que quiero testear
import App from '../components/App';

test('renders learn react link', () => {
  // preparación: renderizo el componente App
  render(<App />);
  // actuación: busco una etiqueta de HTML que tenga el texto 'Testeando React'
  const linkElement = screen.getByText('Testeando React');
  // aserción: si la etiqueta anterior ha sido encontrada, es decir, está en el documento, es que todo está bien y el test termina correctamente
  expect(linkElement).toBeInTheDocument();
});
