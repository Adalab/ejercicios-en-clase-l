import React from 'react';
import ClubList from './ClubList';
import clubs from '../data/data.json';

class App extends React.Component {
  render() {
    return (
        <ClubList clubs={clubs} />
    );
  }
}
export default App;
