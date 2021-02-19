import React from 'react';
import Input from './Input';

const Form = props => {
  return (
    <form className="border--medium">
      <p>Este form que es el componente intermedio</p>
      {/* este componente es funcional */}
      {/* esta sintaxis es igual que en los componentes de clase intermedios pero sin el this. */}
      <Input labelText={props.labelText} handleInputWithLifting={props.handleInputWithLifting} />
    </form>
  );
};

export default Form;
