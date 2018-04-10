// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import api from '../utilities/api';
import Header from './Header';
import Home from './Home';
import Settings from './Settings';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    api.fetch()
      .then(r => {
        this.setState({
          loading: false,
          data: r.data
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    return (
      <div className="app">
        <Header />

        <Route exact path='/' component={ Home }/>
        <Route exact path='/settings' render={ () =>
          <Settings data={ this.state.data } />
        } />
      </div>
    );
  }
}

export default App;
