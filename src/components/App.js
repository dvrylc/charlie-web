// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import Home from './Home';
import Settings from './Settings';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ Home }/>
        <Route exact path='/settings' component={ Settings }/>
      </div>
    );
  }
}

export default App;
