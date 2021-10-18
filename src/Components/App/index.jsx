import React from 'react';
import Header from '../Header';
import Main from '../Main';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className='App-container'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
