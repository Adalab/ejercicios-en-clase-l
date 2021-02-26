import React from 'react';

const App = props => {
  const { dos, uno, ocho, email, noExisto } = props;

  console.log(noExisto);

  return (
    <div>
      <p>{uno}</p>
      <p>{dos}</p>
      <p>{ocho}</p>
      <p>{email}</p>
    </div>
  );
};

export default App;
